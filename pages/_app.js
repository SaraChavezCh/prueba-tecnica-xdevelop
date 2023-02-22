import "/styles/globals.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import MainLayout from "@/components/Layout/MainLayout";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MainLayout>
      <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}