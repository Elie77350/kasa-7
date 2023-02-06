import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../Components/Layout/Header";
import About from "../../Pages/About";
import FlatSheet from "../../Pages/FlatSheet";
import ErrorPage from "../../Pages/ErrorPage";
import Footer from '../../Components/Layout/Footer';
import Home from '../../Pages/Home';


function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/flat/:id" element={<FlatSheet />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Router;