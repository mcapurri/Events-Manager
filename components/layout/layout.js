import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import MainHeader from './main-header/main-header';

const layout = (props) => {
    return (
        <>
            <MainHeader />
            <main>{props.children}</main>
        </>
    );
};

export default layout;
