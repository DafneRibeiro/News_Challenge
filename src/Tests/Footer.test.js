import { getByTestId, render } from '@testing-library/react';
import Footer from '../Components/HeaderFooter/Footer'
import Header from '../Components/HeaderFooter/Header';

test(`Test if the component Footer matches snapshot`, () => {
    const {getByTestId} = render(<Footer />);

    expect(getByTestId(Header)).toHaveTextContent("THE DF NEWS");
}); 