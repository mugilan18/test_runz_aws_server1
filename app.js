const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const session = require("express-session");
const { logError, isOperationalError } = require('./errorHandler')

require("dotenv/config");

const { typeDefs, resolvers } = require("./routes/graphQl/Schema");

const indexRouter = require("./routes/index");
const experimentRouter = require("./routes/experiments");
const labrotoryRouter = require("./routes/labrotory");
const noteRouter = require("./routes/notes");
const procedureRouter = require("./routes/procedure");
const moreInfoRouter = require("./routes/moreInfo");
const pythonRouter = require("./routes/runPython");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");

const app = express();

// DB config
const db = process.env.DB_CONNECTION || require("./config/keys").mongoURI;

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

// connect to mongodb
mongoose
  .connect(db, {
    bufferMaxEntries: 0,
    keepAlive: true,
    socketTimeoutMS: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongodb successfully connected"))
  .catch((err) => console.error(err));


if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(logger("dev"));
}
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/experiments", experimentRouter);
app.use("/labrotories", labrotoryRouter);
app.use("/notes", noteRouter);
app.use("/procedures", procedureRouter);
app.use("/moreInfo", moreInfoRouter);
app.use("/runPython", pythonRouter);
app.use("/api", authRoutes);
app.use("/api", usersRoutes);

process.on('uncaughtException', error => {
  logError(error)
 
  if (!isOperationalError(error)) {
  process.exit(1)
  }
 })

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

module.exports = app;
