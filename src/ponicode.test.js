const rewire = require("rewire")
const ponicode = rewire("./ponicode")
const calculateCommissionJs = ponicode.__get__("calculateCommissionJs")
// @ponicode
describe("calculateCommissionJs", () => {
    test("0", () => {
        let result = calculateCommissionJs(50000.0)
        expect(result).toBe(3750)
    })

    test("1", () => {
        let result = calculateCommissionJs(Infinity)
        expect(result).toBe(Infinity)
    })

    test("3", () => {
        let result = calculateCommissionJs(5000.0)
        expect(result).toBe(250)
    })

    test("My custom test", () => {
        let result = calculateCommissionJs(200000000)
        expect(result).toBe(30001000)
    })

    test("4", () => {
        let result = calculateCommissionJs(5001.0)
        expect(result).toBe(250.05)
    })
})
