import React from 'react';
import Footer from './jsx/src/components/Footer';
import Header from './jsx/src/components/Header';
import Sidebar from './jsx/src/components/Sidebar';
import Button from './jsx/src/components/button';

const App = () => {
    return (
        <div>
            <Header />
            <Sidebar></Sidebar>
            <Button></Button>
            <Footer />
        </div>
    );
};

export default App;