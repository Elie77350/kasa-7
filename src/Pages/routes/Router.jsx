import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Design from '../../Components/Layout/Design';
import About from "../../Pages/About";
import FlatSheet from "../../Pages/FlatSheet";
import ErrorPage from "../../Pages/ErrorPage";
import Home from '../../Pages/Home';


function Router() {
	return (
			<BrowserRouter>
		<Design>
			<Routes>
				<Route element={<Navigate replace to='/home' />} path='/' />
				<Route path="/home" element={<Home />} />
				<Route path="/apartment/:id" element={<FlatSheet />} />
				<Route path='/about' element={<About/>} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Design>
			</BrowserRouter>
	);
}

export default Router;