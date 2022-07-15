export default class TestCase {
	
	input: any
	output: any
	
	constructor(init?:Partial<TestCase>) {
		Object.assign(this, init)
	}

}

