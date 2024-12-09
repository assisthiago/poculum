import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, page = "" }) {
    return (
        <div>
            <Header page={page} />
            <main>{children}</main>
            <Footer page={page} />
        </div>
    );
}
