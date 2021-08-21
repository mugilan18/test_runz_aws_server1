import json

class FirstYChemistry:
    def __init__(self, arg):
        self.arg = arg
    def oxygen(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        V2 = (float(argument[4]) + float(argument[8]))/2
        N2 = (V1 * N1)/V2
        #print(f'N2: {N2}')
    
        V4 = (float(argument[10]) + float(argument[14]))/2
        V3 = (float(argument[12]) + float(argument[16]))/2
        N3 = (float(argument[13]) * float(argument[17]))/2
        N4 = (V3 * N3)/V4
        #print(f'N2: {N2}')
        A =  N4 * 8
        #print(f'A: {A}')
    

        print(json.dumps({"Normality":[{"The  Normality of thio" : str(N2) + " N"}], "Normality":[{"The  Normality of dissolved oxygen" : str(N4) + " N"}], "Amount":[{"The  amount of dissolved oxygen in given water sample " : str(A) + " ppm"}]}))


    def EDTA_Water(self):
        argument = self.arg[:]
        W1 = (float(argument[1]) + float(argument[2]))/2
        #print(f'W1: {W1}')
        N1 = (float(argument[3]) + float(argument[4]))/2
        #print (f'N1: {N1}')
        V1 = (float(argument[5]) + float(argument[6]))/2
        #print (f'V1: {V1}')
        E = W1/V1
        #print(f'E: {E}')

    
        V2 = (float(argument[7]) + float(argument[8]))/2
        #print(f'D1: {D1}')
        H = (1000 * V2)/V1
        #print(f'H: {H}')
        
        print(json.dumps({"Normality":[{"The  Normality of EDTA" : str(E) + " N"}], "Amount":[{"The  amount of  water " : str(H) + " ppm"}]}))

        
    def EDTA_Magnesium(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        V2 = (float(argument[4]) + float(argument[8]))/2
        N2 = (V1 * N1)/V2
        #print(f'N2: {N2}')
    
        V4 = (float(argument[10]) + float(argument[14]))/2
        V3 = (float(argument[12]) + float(argument[16]))/2
        N3 = (float(argument[13]) * float(argument[17]))/2
        N4 = (V3 * N3)/V4
        #print(f'N2: {N2}')
        M = (N4 * float(argument[13]) * 100)/1000
        #print(f'A: {A}')
    

        print(json.dumps({"Normality":[{"The  Normality of EDTA" : str(N2) + " N"}], "Normality":[{"The  Normality of dissolved Magnesium" : str(N4) + " N"}], "Amount":[{"The  amount of Magnesium " : str(M) + " ppm"}]}))

    def Acetic_acid(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        V2 = (float(argument[4]) + float(argument[8]))/2
        K = (float(argument[1]) + float(argument[1]))/2
        N2 = (V1 * N1)/V2
        #print(f'N2: {N2}')
    
        V4 = (float(argument[10]) + float(argument[14]))/2
        V3 = (float(argument[12]) + float(argument[16]))/2
        N3 = (float(argument[13]) * float(argument[17]))/2
        N = (V3 * N3)/V4
        #print(f'N2: {N2}')
        M = (N * float(argument[1]) * 100)/1000
        #print(f'A: {A}')
    

        print(json.dumps({"Normality":[{"The  Normality of NaOH" : str(N2) + " N"}], "Normality":[{"The  Normality of Vinegar" : str(N) + " N"}], "Amount":[{"The  amount of acitic acid " : str(M) + " "}]}))
    def Copper(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        V2 = (float(argument[4]) + float(argument[8]))/2
        K = (float(argument[1]) + float(argument[1]))/2
        N2 = (V1 * N1)/V2
        #print(f'N2: {N2}')
    
        V4 = (float(argument[10]) + float(argument[14]))/2
        V3 = (float(argument[12]) + float(argument[16]))/2
        N3 = (float(argument[13]) * float(argument[17]))/2
        N = (V3 * N3)/V4
        #print(f'N2: {N2}')
        M = (N * float(argument[1]) * 100)/1000
        #print(f'A: {A}')
    

        print(json.dumps({"Normality":[{"The  Normality of thio" : str(N2) + " N"}], "Normality":[{"The  Normality of Copper" : str(N) + " N"}], "Amount":[{"The  amount of Copper " : str(M) + " "}]}))
        
    def Conductometric(self):
        argument = self.arg[0:]
        V1 = (float(argument[1]) + float(argument[2]) + float(argument[3]) + float(argument[4]) + float(argument[5]) + float(argument[6]) + float(argument[7]) + float(argument[8]) + float(argument[9]) + float(argument[10]) + float(argument[11]) + float(argument[12]) + float(argument[13]) + float(argument[14]))/14
        N2 = (V1*float(argument[1]))/float(argument[1])
        M = (N2 * float(argument[1]) * 100)/1000
        print(json.dumps({"Volume":[{"The  Volume of k2cr2o4" : str(V1) + " N"}], "Normality":[{"The  Normality of Iron" : str(N2) + " N"}], "Amount":[{"The  amount of Lead " : str(M) + " "}]}))



    def Bleaching_Powder(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        V2 = (float(argument[4]) + float(argument[8]))/2
        K = (float(argument[1]) + float(argument[1]))/2
        N2 = (V1 * N1)/V2
        #print(f'N2: {N2}')
    
        V4 = (float(argument[10]) + float(argument[14]))/2
        V3 = (float(argument[12]) + float(argument[16]))/2
        N3 = (float(argument[13]) * float(argument[17]))/2
        N = (V3 * N3)/V4
        #print(f'N2: {N2}')
        M = (N * float(argument[1]) * 100)/1000
        #print(f'A: {A}')
    

        print(json.dumps({"Normality":[{"The  Normality of thio" : str(N2) + " N"}], "Normality":[{"The  Normality of chlorine in bleaching" : str(N) + " N"}], "Amount":[{"The  amount of chlorine " : str(M) + " "}]}))
        
        
    def Colorimetry(self):
        argument = self.arg[0:]
        I = (float(argument[1]) + float(argument[2]) + float(argument[3]) + float(argument[4]) + float(argument[5]) + float(argument[6]) + float(argument[7]))/7
        print(json.dumps({"Amount":[{"The  Iron in given solution" : str(I) + " N"}]}))
        
       
    def COD(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        V2 = (float(argument[4]) + float(argument[8]))/2
        K = (float(argument[1]) + float(argument[1]))/2
        #print (f'K: {K}')
        N2 = (V1 * N1)/V2
        #print(f'N2: {N2}')
    
        V4 = (float(argument[10]) + float(argument[14]))/2
        V3 = (float(argument[12]) + float(argument[16]))/2
        N3 = (float(argument[13]) * float(argument[17]))/2
        N = (V3 * N3)/V4
        #print(f'N2: {N2}')
        M = (N * float(argument[1]) * 100)/1000
        #print(f'A: {A}')
    

        print(json.dumps({"Normality":[{"The  Normality of fas" : str(N2) + " N"}], "Normality":[{"The  Normality of COD" : str(N) + " N"}], "Amount":[{"The  amount of copper " : str(M) + " "}]}))
        
    def MOHR(self):
        argument = self.arg[0:]
        S = (float(argument[1])-float(argument[1]))
        #print(f'S: {S}')
        N = ((float(argument[1]) *S)/float(argument[1]))
        #print(f'N: {N}')
        C = N * float(argument[1])
        #print(f'C: {C}')
        print(json.dumps({"Volume":[{"The  volume of silver nitrate" : str(S) + " N"}], "Amount":[{"The  amount of Chloride on water " : str(C) + " "}]}))
                                     
    def Alkalinity(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        P = (float(argument[2]) + float(argument[6]))/2
        V2 = (float(argument[3]) + float(argument[7]))/2
        H = V2 - float(argument[3])
        W1 = (float(argument[3]) * 1000)/V1
        W2 = (H * 1000)/V1
        A = W2 + W1
        
        print(json.dumps({"Volume":[{"The  volume of water" : str(H) + " N"}], "Amount":[{"The  total alkalinity " : str(A) + " "}]}))

    def Permanganometry(self):
        argument = self.arg[0:]
        #print(argument)
        V1 = (float(argument[2]) + float(argument[6]))/2
        N1 = (float(argument[3]) + float(argument[7]))/2
        V2 = (float(argument[4]) + float(argument[8]))/2
        K = (float(argument[1]) + float(argument[1]))/2
        N2 = (V1 * N1)/V2
        #print(f'N2: {N2}')
    
        V4 = (float(argument[10]) + float(argument[14]))/2
        V3 = (float(argument[12]) + float(argument[16]))/2
        N3 = (float(argument[13]) * float(argument[17]))/2
        N = (V3 * N3)/V4
        #print(f'N2: {N2}')
        M = (N * float(argument[1]) * 100)/1000
        #print(f'A: {A}')
    

        print(json.dumps({"Normality":[{"The  Normality of KMnO4" : str(N2) + " N"}], "Normality":[{"The  Normality of fas" : str(N) + " N"}], "Amount":[{"The  amount of fas " : str(M) + " "}]}))
        
    
