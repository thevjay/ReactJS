import { render ,screen} from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe("Contact Us page Test Case",()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole('heading');
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside contact  component",()=>{
        render(<Contact/>);
    
        const button = screen.getByText('Submit');
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
    
    it("Should load input name inside contact  component",()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText('name');
    
        // Assertion
        expect(inputName).toBeInTheDocument();
    })
    
    it("Should load 2 input boxs on the inside contact  component",()=>{
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole('textbox');
    
        //console.log(inputBoxes.length);
    
        // Assertion
        expect(inputBoxes.length).toBe(2);
    })
})







