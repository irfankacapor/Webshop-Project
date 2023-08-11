import {screen, render} from "@testing-library/react"
import Footer from "@/components/Footer"
import '@testing-library/jest-dom';

it("test", () => {
    render(<Footer/>)
    const elem = screen.getByText("Home")
    expect(elem).toBeInTheDocument();
})