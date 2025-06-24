import React, { useState } from 'react';
import cuff from '../../assets/cuff.png';
import G from '../../assets/google.png';
import F from '../../assets/facebook.png';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember me:', remember);
    };

    return (
        <div className="flex min-h-screen text-white">
            <div className="w-1/2 bg-black flex items-end justify-center">
                <img src={cuff} alt="cuff" className="w-auto" />
            </div>

            <div className="w-1/2 bg-stone-900 flex items-center justify-center px-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>
                    <hr className="border-gray-600 mb-6" />

                    <div className="flex gap-4 mb-6">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-medium py-2 rounded hover:bg-gray-200">
                            <img src={G} alt="Google"/>
                            Sign in with Google
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#3b5998] text-white font-medium py-2 rounded hover:bg-[#2d4373]">
                            <img src={F} alt="Facebook"/>
                            Sign in with Facebook
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Placeholder"
                                className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Placeholder"
                                className="w-full px-3 py-2 rounded bg-[#2e2e2e] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                    className="accent-blue-500"
                                />
                                Remember Me
                            </label>
                            <a href="#" className="text-blue-400 hover:underline">
                                Forgot password
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-bold"
                        >
                            Sign In 
                        </button>

                        <p className="text-sm text-center mt-2">
                            Don’t have an account?{' '}
                            <a href="#" className="text-blue-400 hover:underline">
                                Register
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
