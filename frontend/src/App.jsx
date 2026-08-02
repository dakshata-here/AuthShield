import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<div className="p-8 text-center text-slate-400">Login Page Placeholder</div>} />
      <Route path="/register" element={<div className="p-8 text-center text-slate-400">Register Page Placeholder</div>} />
      <Route path="/verify-otp" element={<div className="p-8 text-center text-slate-400">OTP Verification Page Placeholder</div>} />
      <Route path="/qr-auth" element={<div className="p-8 text-center text-slate-400">QR Authentication Page Placeholder</div>} />
      <Route path="/dashboard" element={<div className="p-8 text-center text-slate-400">User Dashboard Placeholder</div>} />
      <Route path="/security" element={<div className="p-8 text-center text-slate-400">Security Dashboard Placeholder</div>} />
      <Route path="/login-history" element={<div className="p-8 text-center text-slate-400">Login History Placeholder</div>} />
      <Route path="/devices" element={<div className="p-8 text-center text-slate-400">Trusted Devices Placeholder</div>} />
      <Route path="/transactions" element={<div className="p-8 text-center text-slate-400">Transactions Page Placeholder</div>} />
      <Route path="/assistant" element={<div className="p-8 text-center text-slate-400">Security Assistant Placeholder</div>} />
      <Route path="/profile" element={<div className="p-8 text-center text-slate-400">Profile & Settings Placeholder</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
