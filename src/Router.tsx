import { Route, Routes } from "react-router-dom"
import { Descricao } from "./pages/Descricao";
import { Event } from "./pages/Event";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Descricao />}/>
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
    );
}