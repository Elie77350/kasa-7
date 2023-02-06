import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../Components/Layout/Header";
import About from "../About";
import FlatSheet from "../FlatSheet";
import ErrorPage from "../ErrorPage";
import Footer from '../../Components/Layout/Footer';
import Home from '../Home';


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