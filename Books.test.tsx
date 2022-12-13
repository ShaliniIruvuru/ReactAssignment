import {fireEvent, render,screen} from '@testing-library/react';
import Books from '../components/Books';
import App from '../App'
import BookCard from '../components/BookCard';

const sampleBookDataWithFinished = {
    id:1,
    img: "https://media.istockphoto.com/id/1361312027/photo/little-african-american-girl-reading-book-on-bed.jpg?b=1&s=170667a&w=0&k=20&c=_22DObgpV4hHgFt53GVrQfUx4sNYgi2zIr7ZoTubr9M=",
    name: 'Beyond Entrepreneurship',
    author: 'Jim Collins & Bill Lazier',
    readTime: '13-minute read',
    readersCount: '1.9k reads',
    isFinished:true
};

const sampleBookDataWithOutFinished = {
    id: 2,
    img: "https://media.istockphoto.com/id/1361312027/photo/little-african-american-girl-reading-book-on-bed.jpg?b=1&s=170667a&w=0&k=20&c=_22DObgpV4hHgFt53GVrQfUx4sNYgi2zIr7ZoTubr9M=",
    name: 'Beyond Entrepreneurship',
    author: 'Jim Collins & Bill Lazier',   
    isFinished: false
};

const updateMock = jest.fn();





describe("Test the Tabs",()=>{

    test("render", ()=>{
        render(<App />)
        const element =screen.getByText(/Currently Reading/i);
      expect(element).toBeInTheDocument();
    })

    test("render the  Tabs list",async ()=> {
        render(<App />);
        const tabList= await screen.findAllByRole("tab");
        //console.log(tabList)
        expect(tabList).toHaveLength(2);
    })
    
})

describe("book card",()=>{
    test("render the book card",()=>{
        render(<BookCard item={sampleBookDataWithFinished} updateBook={updateMock}/>);
        const book = screen.getByTestId('bookCard');
        expect(book).toBeInTheDocument();
    });

    test("render finished buttton",()=>{
        render(<BookCard item={sampleBookDataWithFinished} updateBook={updateMock}/>);        
        const element =screen.getByText(/Finished/i);
        expect(element).toBeInTheDocument();
    });
    
    test("render Read Again buttton",()=>{
        render(<BookCard item={sampleBookDataWithOutFinished} updateBook={updateMock}/>);        
        const element =screen.getByText(/Read Again/i);
        expect(element).toBeInTheDocument();
    });

    test('should fireEvent', () => {
        render(<BookCard item={sampleBookDataWithFinished} updateBook={updateMock}/>);
        const cardButton = screen.getByTestId('card-button');
        fireEvent.click(cardButton);
        expect(updateMock).toHaveBeenCalledTimes(1);
    })
   
    test('should render readers count', () => {
        render(<BookCard item={sampleBookDataWithFinished} updateBook={updateMock}/>);
        const book = screen.getByTestId('readers-count');
        expect(book).toBeInTheDocument();
    })

});

describe('<Books />', () => {
    test('render tabs', ( )=> {
        render(<Books />);
        const currentlyReadingTab = screen.getByTestId('currentlyReadingTab');
        const finishedTab = screen.getByTestId('finishedTab');
        expect(currentlyReadingTab).toBeInTheDocument();
        expect(finishedTab).toBeInTheDocument();
    })
})