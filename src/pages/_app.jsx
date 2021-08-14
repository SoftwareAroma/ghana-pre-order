import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../Layout/Layout';
import {StateProvider} from '../Provider/StateProvider';
import reducer, {initialState} from '../Provider/Reducer';
import {HeadTag} from "../components/components";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <HeadTag />
          <StateProvider initialState={initialState} reducer={reducer}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </StateProvider>
      </>
  );
}

export default MyApp
