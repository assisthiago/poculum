import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
