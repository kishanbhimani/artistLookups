const RenderWithAnimation = require("./RenderWithAnimation")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new RenderWithAnimation.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
