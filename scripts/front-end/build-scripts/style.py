import config as Config
import os


class CssFileCompiler:

	config = {}
	endpoint = ""
	source = ""
	target = ""

	def __init__(self, endpoint, config):
		self.config = config
		self.endpoint = endpoint
		self.__initSourceFileName()
		self.__initTargetFileName()

	def __initSourceFileName(self):
		self.source = self.config['sourceDirectory'] + self.endpoint + '/style.sass'
	
	def __initTargetFileName(self):
		self.target = self.config['targetDirectoryForCss'] + self.endpoint + '/style.css'
	
	def compileFile(self):
		command = self.__getCompilationCommand()
		self.__runCompilationCommand(command)
	
	def __getCompilationCommand(self):
		return self.__getSassBaseCommand() + self.__getSassIOCommand()
	
	def __getSassBaseCommand(self):
		return "sass --no-source-map "
	
	def __getSassIOCommand(self):
		return self.source + ":" + self.target
	
	def __runCompilationCommand(self, command):
		os.system(command)



def main():
	config = Config.loadConfig()
	for endpoint in config['endpoints']:
		cssCompiler = CssFileCompiler(endpoint, config)
		cssCompiler.compileFile()



if __name__ == '__main__':
	main()

