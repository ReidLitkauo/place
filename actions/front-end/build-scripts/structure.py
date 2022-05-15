import json
import os
import config as Config



class HtmlFileCompiler:

	config = {}
	endpoint = ""
	target = ""

	def __init__(self, endpoint, config):
		self.config = config
		self.endpoint = endpoint
		self.__initTargetFileName()
	
	def __initTargetFileName(self):
		self.target = self.config['targetDirectoryForHtml'] + self.endpoint + ".html"
	
	def compileFile(self):
		command = self.__getCompilationCommand()
		self.__runCompilationCommand(command)
	
	def __getCompilationCommand(self):
		pugConfig = self.__getPugConfig()
		pugConfigString = json.dumps(pugConfig)
		return self.__getCompilationCommandWithPugConfig(pugConfigString)
	
	def __getPugConfig(self):
		return {
			'endpoint': self.endpoint,
		}
	
	def __getCompilationCommandWithPugConfig(self, pugConfigString):
		return self.__getPugCmdInitialFragment() +\
			self.__getPugCmdConfigFragment(pugConfigString) +\
			self.__getPugCmdIncludeFragment() +\
			self.__getPugCmdInputFragment() +\
			self.__getPugCmdOutputFragment()
	
	def __getPugCmdInitialFragment(self):
		return "pug --no-debug "
	
	def __getPugCmdConfigFragment(self, pugConfigString):
		return " -O '" + pugConfigString + "' "
	
	def __getPugCmdIncludeFragment(self):
		return " -b " + self.config['sourceDirectory'] + self.endpoint + "/ "
	
	def __getPugCmdInputFragment(self):
		return " < " + self.config['htmlTemplateFile'] + " "
	
	def __getPugCmdOutputFragment(self):
		return " > " + self.target + " "
	
	def __runCompilationCommand(self, command):
		os.system(command)



class HtmlAllFilesCompiler:

	config = {}

	def __init__(self, config):
		self.config = config
	
	def compileAllFiles(self):
		for endpoint in self.config['endpoints']:
			fileCompiler = HtmlFileCompiler(endpoint, self.config)
			fileCompiler.compileFile()



def main():
	config = Config.loadConfig()
	htmlCompiler = HtmlAllFilesCompiler(config)
	htmlCompiler.compileAllFiles()

if __name__ == "__main__":
	main()

