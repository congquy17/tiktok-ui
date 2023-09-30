import Header from '~/components/Layout/components/Header';

function HearderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="containter">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HearderOnly;
