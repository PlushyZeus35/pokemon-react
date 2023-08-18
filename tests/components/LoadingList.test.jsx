import { render } from "@testing-library/react"
import { LoadingList } from "../../src/components/LoadingList"

describe('Tests of <LoadingList /> component', () => {
    test('Should display loading animation (Snapshot)', ()=>{
        const {container} = render(<LoadingList/>);
        expect(container).toMatchSnapshot();
    })
})