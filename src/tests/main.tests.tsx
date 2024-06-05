// import { screen, waitFor, render } from "@testing-library/react"
import App from "app"
import userEvent from "@testing-library/user-event";
import { render, screen } from '@testing-library/react'

// from Neson55
describe('Renders App', () => {

    it('renders the App component', async () => {
        render(App)
        const title = screen.getByText("Platform")
        expect(title).toBeInTheDocument()
    })

    it('Click on email', async () => {
        render(App)
        const signInLink = screen.getByText("help@games.com");
        await userEvent.click(signInLink);
        const searchInput = screen.getByPlaceholderText('Search...')
        expect(searchInput).toBeEmptyDOMElement()
    })
   
})

test("App should have correct initial render", () => {
  render(App)

  // The app should be rendered correctly
  expect(screen.getByText(/learn/i)).toBeInTheDocument()

  // Initial state: count should be 0, incrementValue should be 2
  expect(screen.getByLabelText("Count")).toHaveTextContent("0")
  expect(screen.getByLabelText("Set increment amount")).toHaveValue(2)
})

// test("App should have correct initial render", () => {
//   render(App)

//   // The app should be rendered correctly
//   expect(screen.getByText(/learn/i)).toBeInTheDocument()

//   // Initial state: count should be 0, incrementValue should be 2
//   expect(screen.getByLabelText("Count")).toHaveTextContent("0")
//   expect(screen.getByLabelText("Set increment amount")).toHaveValue(2)
// })


// test("Increment value and Decrement value should work as expected", async () => {
//   const { user } = render(App)

//   // Click on "+" => Count should be 1
//   await user.click(screen.getByLabelText("Increment value"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("1")

//   // Click on "-" => Count should be 0
//   await user.click(screen.getByLabelText("Decrement value"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("0")
// })

// test("Add Amount should work as expected", async () => {
//   const { user } = render(App)

//   // "Add Amount" button is clicked => Count should be 2
//   await user.click(screen.getByText("Add Amount"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("2")

//   const incrementValueInput = screen.getByLabelText("Set increment amount")
//   // incrementValue is 2, click on "Add Amount" => Count should be 4
//   await user.clear(incrementValueInput)
//   await user.type(incrementValueInput, "2")
//   await user.click(screen.getByText("Add Amount"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("4")

//   // [Negative number] incrementValue is -1, click on "Add Amount" => Count should be 3
//   await user.clear(incrementValueInput)
//   await user.type(incrementValueInput, "-1")
//   await user.click(screen.getByText("Add Amount"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("3")
// })

// it("Add Async should work as expected", async () => {
//   const { user } = render(App)

//   // "Add Async" button is clicked => Count should be 2
//   await user.click(screen.getByText("Add Async"))

//   await waitFor(() =>
//     expect(screen.getByLabelText("Count")).toHaveTextContent("2"),
//   )

//   const incrementValueInput = screen.getByLabelText("Set increment amount")
//   // incrementValue is 2, click on "Add Async" => Count should be 4
//   await user.clear(incrementValueInput)
//   await user.type(incrementValueInput, "2")

//   await user.click(screen.getByText("Add Async"))
//   await waitFor(() =>
//     expect(screen.getByLabelText("Count")).toHaveTextContent("4"),
//   )

//   // [Negative number] incrementValue is -1, click on "Add Async" => Count should be 3
//   await user.clear(incrementValueInput)
//   await user.type(incrementValueInput, "-1")
//   await user.click(screen.getByText("Add Async"))
//   await waitFor(() =>
//     expect(screen.getByLabelText("Count")).toHaveTextContent("3"),
//   )
// })

// test("Add If Odd should work as expected", async () => {
//   const { user } = render(App)

//   // "Add If Odd" button is clicked => Count should stay 0
//   await user.click(screen.getByText("Add If Odd"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("0")

//   // Click on "+" => Count should be updated to 1
//   await user.click(screen.getByLabelText("Increment value"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("1")

//   // "Add If Odd" button is clicked => Count should be updated to 3
//   await user.click(screen.getByText("Add If Odd"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("3")

//   const incrementValueInput = screen.getByLabelText("Set increment amount")
//   // incrementValue is 1, click on "Add If Odd" => Count should be updated to 4
//   await user.clear(incrementValueInput)
//   await user.type(incrementValueInput, "1")
//   await user.click(screen.getByText("Add If Odd"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("4")

//   // click on "Add If Odd" => Count should stay 4
//   await user.clear(incrementValueInput)
//   await user.type(incrementValueInput, "-1")
//   await user.click(screen.getByText("Add If Odd"))
//   expect(screen.getByLabelText("Count")).toHaveTextContent("4")
// })