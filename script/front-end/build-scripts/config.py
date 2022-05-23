import json

def loadConfig():

	def openConfigFile():
		return open("./script/front-end/build.config.json")
	
	def parseConfigFile(file):
		return json.load(file)

	cfgObject = {}
	with openConfigFile() as cfgFile:
		cfgObject = parseConfigFile(cfgFile)
	return cfgObject

