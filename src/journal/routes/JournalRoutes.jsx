import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { JournalPage } from '../pages';
import { Navigate } from 'react-router-dom';

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<JournalPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    );
};
