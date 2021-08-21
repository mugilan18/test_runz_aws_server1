#!/usr/bin/python

import sys, getopt, time
import json
from FirstYearPhysics import FirstYPhysics
from FirstYearChemistry import FirstYChemistry
#from EnvironmentEngineeringLab import EVS
from MaterialTesting2 import MT2
#from FluidMechanics import FML
#from BEE import BEE
#from FirstYearCivil import FirstYCivil
#from MaterialAndMetallorgy import MAM


def main(argv):
    argument = ''
    usage = 'usage: script.py -f <sometext>'
    try:
        opts, args = getopt.getopt(argv,"hf:",["foo="])
    except getopt.GetoptError:
        print(usage)
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print(usage)
            sys.exit()
        elif opt in ("-f", "--foo"):
            argument = arg.split()
            try:
                if((argument[len(argument) -2] == "Vibration") and (argument[len(argument) -1] == "Magnetometer")):
                    FirstYPhysics(argument).vibration_magnetometer()
                elif((argument[len(argument) -3] == "Air") and (argument[len(argument) -2] == "Wedge") and (argument[len(argument) -1] == "Experiment")):
                    FirstYPhysics(argument).Air_wedge()
                elif((argument[len(argument) -1] == "Polarimeter")):
                    FirstYPhysics(argument).Polarimeter()
                elif((argument[len(argument) -2] == "Newton") and (argument[len(argument) -1] == "Rings")):
                    FirstYPhysics(argument).Newton_Rings()
                elif((argument[len(argument) -3] == "Lee's") and (argument[len(argument) -2] == "Disc") and (argument[len(argument) -1] == "Method")):
                    FirstYPhysics(argument).lee()
                elif((argument[len(argument) -2] == "Magnetic") and (argument[len(argument) -1] == "Field")):
                    FirstYPhysics(argument).Coil()
                elif((argument[len(argument) -2] == "Thermal") and (argument[len(argument) -1] == "Conductivity")):
                    FirstYPhysics(argument).Thermal()
                elif((argument[len(argument) -2] == "Laser") and (argument[len(argument) -1] == "Grating")):
                    FirstYPhysics(argument).Laser_grating()
                elif((argument[len(argument) -2] == "Spectometer") and (argument[len(argument) -1] == "Grating")):
                    FirstYPhysics(argument).Spectometer_grating()
                elif((argument[len(argument) -2] == "Spectrometer") and (argument[len(argument) -1] == "Prism")):
                    FirstYPhysics(argument).Spectrometer_prism()
                elif((argument[len(argument) -2] == "Dissolved") and (argument[len(argument) -1] == "Oxygen")):
                    FirstYChemistry(argument).oxygen()
                elif((argument[len(argument) -3] == "EDTA") and (argument[len(argument) -2] == "Method") and (argument[len(argument) -1] == "Water")):
                    FirstYChemistry(argument).EDTA_Water()
                elif((argument[len(argument) -3] == "Magnesium") and (argument[len(argument) -2] == "by") and (argument[len(argument) -1] == "EDTA")):
                    FirstYChemistry(argument).EDTA_Magnesium()
                elif((argument[len(argument) -4] == "Acetic") and (argument[len(argument) -3] == "Acid") and (argument[len(argument) -2] == "in") and (argument[len(argument) -1] == "Vinegar")):
                    FirstYChemistry(argument).Acetic_acid()
                elif((argument[len(argument) -4] == "Copper") and (argument[len(argument) -3] == "in") and (argument[len(argument) -2] == "CuSO4") and (argument[len(argument) -1] == "Solution")):
                    FirstYChemistry(argument).Copper()
                elif((argument[len(argument) -2] == "Conductometric") and (argument[len(argument) -1] == "Method")):
                    FirstYChemistry(argument).Conductometric()
                elif((argument[len(argument) -4] == "Chlorine") and (argument[len(argument) -3] == "in") and (argument[len(argument) -2] == "Bleaching") and (argument[len(argument) -1] == "Powder")):
                    FirstYChemistry(argument).Bleaching_Powder()
                elif((argument[len(argument) -3] == "Ferrous") and (argument[len(argument) -2] == "by") and (argument[len(argument) -1] == "Permanganometry")):
                    FirstYChemistry(argument).Permanganometry()
                elif((argument[len(argument) -3] == "Iron") and (argument[len(argument) -2] == "by") and (argument[len(argument) -1] == "Colorimetry")):
                    FirstYChemistry(argument).Colorimetry()
                elif((argument[len(argument) -3] == "Chemical") and (argument[len(argument) -2] == "Oxygen") and (argument[len(argument) -1] == "Demand")):
                    FirstYChemistry(argument).COD()
                elif((argument[len(argument) -6] == "Chloride") and (argument[len(argument) -5] == "in") and (argument[len(argument) -4] == "Water") and (argument[len(argument) -3] == "by") and  (argument[len(argument) -2] == "Mohr’s") and (argument[len(argument) -1] == "Method")):
                    FirstYChemistry(argument).MOHR()
                elif((argument[len(argument) -4] == "Alkalinity") and  (argument[len(argument) -3] == "of") and  (argument[len(argument) -2] == "Water") and  (argument[len(argument) -1] == "Sample")):
                    FirstYChemistry(argument).Alkalinity()
                elif((argument[len(argument) -4] == "Determination") and  (argument[len(argument) -3] == "of") and  (argument[len(argument) -2] == "total") and  (argument[len(argument) -1] == "solids")):
                    EVS(argument).total_solids()
                elif((argument[len(argument) -3] == "Determination") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "alkalinity")):
                    EVS(argument).alkalinity()
                elif((argument[len(argument) -3] == "Determination") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "chloride")):
                    EVS(argument).chloride()
                elif((argument[len(argument) -3] == "Determination") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "TH")):
                    EVS(argument).total_hardness()
                elif((argument[len(argument) -3] == "Determination") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "RC")):
                    EVS(argument).chlorine()
                elif((argument[len(argument) -3] == "Determination") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "DO")):
                    EVS(argument).dissolved_oxygen()
                elif((argument[len(argument) -4] == "Specific") and  (argument[len(argument) -3] == "gravity") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "cement")):
                    MT2(argument).Gravity()
                elif((argument[len(argument) -5] == "Specific") and  (argument[len(argument) -4] == "gravity") and  (argument[len(argument) -3] == "of") and  (argument[len(argument) -2] == "fine") and  (argument[len(argument) -1] == "aggregate")):
                    MT2(argument).Fine_aggregate()
                elif((argument[len(argument) -4] == "Specific") and  (argument[len(argument) -3] == "gravity") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "coarse")):
                    MT2(argument).coarse_aggregate()
                elif((argument[len(argument) -4] == "Size") and  (argument[len(argument) -3] == "distribution") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "coarse")):
                    MT2(argument).Size_aggregate()
                elif((argument[len(argument) -4] == "Size") and  (argument[len(argument) -3] == "distribution") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "fine")):
                    MT2(argument).particle_aggregate()
                elif((argument[len(argument) -4] == "Consistency") and  (argument[len(argument) -3] == "of") and  (argument[len(argument) -2] == "standard") and  (argument[len(argument) -1] == "cement")):
                    MT2(argument).Consistency()
                elif((argument[len(argument) -4] == "Setting") and  (argument[len(argument) -3] == "time") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "cement")):
                    MT2(argument).Setting_time()
                elif((argument[len(argument) -4] == "Bulking") and  (argument[len(argument) -3] == "of") and  (argument[len(argument) -2] == "fine") and  (argument[len(argument) -1] == "aggregate")):
                    MT2(argument).Bulk()
                elif((argument[len(argument) -3] == "VEE") and  (argument[len(argument) -2] == "BEE") and  (argument[len(argument) -1] == "Consistometer")):
                    MT2(argument).Vee_Bee()
                elif((argument[len(argument) -3] == "Compaction") and  (argument[len(argument) -2] == "factor") and  (argument[len(argument) -1] == "test")):
                    MT2(argument).compaction()
                elif((argument[len(argument) -3] == "Slump") and  (argument[len(argument) -2] == "cone") and  (argument[len(argument) -1] == "test")):
                    MT2(argument).Slump()
                elif((argument[len(argument) -4] == "Compressive") and  (argument[len(argument) -3] == "strength") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "cement")):
                    MT2(argument).compression()
                elif((argument[len(argument) -4] == "Flexural") and  (argument[len(argument) -3] == "strength") and  (argument[len(argument) -2] == "of") and  (argument[len(argument) -1] == "concrete")):
                    MT2(argument).Flexural()
                elif((argument[len(argument) -3] == "Flow") and  (argument[len(argument) -2] == "Through") and  (argument[len(argument) -1] == "Pipes")):
                    FML(argument).Through_Pipe()
                elif((argument[len(argument) -3] == "Flow") and  (argument[len(argument) -2] == "Through") and  (argument[len(argument) -1] == "Venturimeter")):
                    FML(argument).Venturimeter()
                elif((argument[len(argument) -5] == "Impact") and  (argument[len(argument) -4] == "of") and  (argument[len(argument) -3] == "Jet") and (argument[len(argument) -2] == "on") and (argument[len(argument) -1] == "Plate")):
                    FML(argument).Jet()
                elif((argument[len(argument) -2] == "Centrifugal") and  (argument[len(argument) -1] == "Pump")):
                    FML(argument).Centrifugal()
                elif((argument[len(argument) -4] == "Test") and (argument[len(argument) -3] == "On") and (argument[len(argument) -2] == "Reciprocating") and  (argument[len(argument) -1] == "Pump")):
                    FML(argument).Reciprocating()
                elif((argument[len(argument) -2] == "Submersible") and  (argument[len(argument) -1] == "Pump")):
                    FML(argument).Submersible()
                elif((argument[len(argument) -4] == "Determination") and  (argument[len(argument) -3] == "of") and  (argument[len(argument) -2] == "Minor") and  (argument[len(argument) -1] == "Losses")):
                    FML(argument).Minor_Loss()
                elif((argument[len(argument) -3] == "Cathode") and  (argument[len(argument) -2] == "Ray") and  (argument[len(argument) -1] == "Oscilloscope")):
                    BEE(argument).CRO()
                elif((argument[len(argument) -3] == "Impact") and (argument[len(argument) -2] == "test") and (argument[len(argument) -1] == "Charpy")):
                    FirstYCivil(argument).Impact_test_charpy()
                elif((argument[len(argument) -3] == "Impact") and (argument[len(argument) -2] == "test") and (argument[len(argument) -1] == "Izod")):
                    FirstYCivil(argument).Impact_test_diode()
                elif((argument[len(argument) -4] == "Erichsen") and (argument[len(argument) -3] == "sheet") and (argument[len(argument) -2] == "metal") and (argument[len(argument) -1] == "test")):
                    MAM(argument).Erichsen_sheet_metal_test()
                elif((argument[len(argument) -2] == "Hardness") and (argument[len(argument) -1] == "test")):
                    MAM(argument).Hardness_test()
                elif((argument[len(argument) -3] == "Rock") and (argument[len(argument) -2] == "well") and (argument[len(argument) -1] == "hardness")):
                    MAM(argument).Rock_well_hardness()
                elif((argument[len(argument) -2] == "Tension") and (argument[len(argument) -1] == "test")):
                    MAM(argument).Tension_test()
            

      
                else:
                    print(json.dumps({"experiment":"not yet added"}))
            except ValueError:
                print(json.dumps({"error":"value added error"}))
            


if __name__ == "__main__":
    main(sys.argv[1:])