import React, { useState } from 'react'
import BookCard from './BookCard'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const data = [
    {
        id: 1,
        img: "https://media.istockphoto.com/id/1361312027/photo/little-african-american-girl-reading-book-on-bed.jpg?b=1&s=170667a&w=0&k=20&c=_22DObgpV4hHgFt53GVrQfUx4sNYgi2zIr7ZoTubr9M=",
        name: 'Beyond Entrepreneurship',
        author: 'Jim Collins & Bill Lazier',
        readTime: '13-minute read',
        readersCount: '1.9k reads',
        isFinished: true
    },
    {
        id: 2,
        img: "data:image/jpeg;base64,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",
        name: ' A story of Struggle',
        author: ' Steve Glaveski',
        readTime: '15-minute read',
        // readersCount: '1.9k reads',
        isFinished: false

    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ16FoG3w3laI6mZUvihOJSQvzfz6iWxC0Uw&usqp=CAU",
        name: "The Guide",
        author: "R.K.Narayan",
        readTime: '13-minute read',
        readersCount: '1.9k reads',
        isFinished: true
    },
]

//Mui Tab
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;

}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}






const Books = (): any => {

    const [books, setBooks] = useState(data);//setting for books
    const [value, setValue] = useState(0); //seeting for tab

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);    //This event for Tab change
    }

    //Changing the books
    const updateBook = ({ id, isFinished }: any) => {
        const updatedBooks = books.map((item: any) => {
            if (item.id === id) {
                return {
                    ...item, //spread operator
                    isFinished: isFinished,
                }
            } else {
                return item;
            }
        })
        setBooks(updatedBooks);
    }
    const renderBooks = (data: any) => {

        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: '20px 10px',
            }}>


                {
                    data.map((item: any, index: number) => {
                        return <BookCard updateBook={updateBook} key={index} item={item} />
                    })
                }
            </div>
        )
    }

    return (
        <Box sx={{ width: '100%' }} data-testid='books-wrapper'>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }} >
                <Tabs TabIndicatorProps={{ style: { background: 'green' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab data-testid='currentlyReadingTab' style={{ color: 'green' }} label="Currently Reading" {...a11yProps(0)} />
                    <Tab data-testid='finishedTab' label="Finished" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {renderBooks(books.filter((item: any) => item.isFinished === true))}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {renderBooks(books.filter((item: any) => item.isFinished === false))}
            </TabPanel>
        </Box>
    )

}


export default Books;
