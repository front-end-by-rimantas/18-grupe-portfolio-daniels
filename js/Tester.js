class Tester {
    constructor(title) {
        this.title = title;
        this.tests = [];
    }

    excepted(obtainedValue, expectedValue) {
        this.tests.push({
            obtained: obtainedValue,
            expected: expectedValue
        });
    }

    runTest() {
        const testsCount = this.tests.length;
        let passed = 0;
        let failed = [];


        for (let i = 0; i < testsCount; i++) {
            if (this.tests[i].obtained === this.tests[i].expected) {
                passed++;
            } else {
                failed.push(i);
            }
        }

        if (failed.length) {
            console.log(`${this.title}| passed: ${passed}, failed: ${testsCount - passed}. Totals tests: ${testsCount}`);

            for (let i = 0; i < failed.length; i++) {
                console.log(`%c${this.title}| ${failed[i] + 1} test failed! Got: ${this.tests[failed[i]].obtained}, expected: ${this.tests[failed[i]].expected}`, 'color: red;');
            }
        } else {
            console.log(`%c${this.title}| Passed all ${testsCount} tests`, 'color: green');
        }
    }
}

export { Tester }