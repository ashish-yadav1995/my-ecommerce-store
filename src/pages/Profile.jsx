// import React from 'react';

// const Profile = () => {
//   // Dummy data - Ise aap baad mein props ya context se replace kar lena
//   const dummyUser = {
//     fullName: "John Doe",
//     email: "john@example.com",
//     phone: "9876543210",
//     role: "admin", // change to 'user' to see the difference
//     joinDate: "April 2026"
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Page Header */}
//       <div className="bg-black text-white py-12 px-6">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-4xl font-black tracking-tighter">MY ACCOUNT</h1>
//           <p className="text-gray-400 mt-2 font-medium">Manage your profile and orders</p>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto w-full -mt-8 px-6 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
//           {/* LEFT COLUMN: Sidebar Card */}
//           <div className="md:col-span-4 lg:col-span-3">
//             <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-24">
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center text-3xl font-black text-white mb-4 border-4 border-gray-100 shadow-inner">
//                   {dummyUser.fullName.charAt(0)}
//                 </div>
//                 <h2 className="text-xl font-black text-black">{dummyUser.fullName}</h2>
//                 <span className={`mt-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${dummyUser.role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
//                   {dummyUser.role}
//                 </span>
//               </div>

//               <div className="mt-8 space-y-2">
//                 <button className="w-full flex items-center gap-3 px-4 py-3 bg-black text-white rounded-2xl font-bold text-sm transition-all">
//                   <span>👤</span> Profile Info
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-2xl font-bold text-sm transition-all">
//                   <span>📦</span> My Orders
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-2xl font-bold text-sm transition-all text-red-500">
//                   <span>🚪</span> Logout
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Content Area */}
//           <div className="md:col-span-8 lg:col-span-9 space-y-6">
            
//             {/* Personal Details Card */}
//             <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
//               <div className="flex justify-between items-center mb-8">
//                 <h3 className="text-xl font-black tracking-tight">Personal Information</h3>
//                 <button className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">Edit Details</button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//                 <DetailBox label="Full Name" value={dummyUser.fullName} />
//                 <DetailBox label="Phone Number" value={dummyUser.phone} />
//                 <DetailBox label="Email Address" value={dummyUser.email} />
//                 <DetailBox label="Member Since" value={dummyUser.joinDate} />
//               </div>

//               {dummyUser.role === 'admin' && (
//                 <div className="mt-10 p-5 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-4">
//                   <span className="text-2xl">🛡️</span>
//                   <div>
//                     <h4 className="text-red-700 font-black text-sm uppercase tracking-tight">Admin Privileges Active</h4>
//                     <p className="text-red-600 text-xs mt-1 font-medium leading-relaxed">
//                       You have full access to the management console. You can edit products, manage users, and view sales reports from the Admin Dashboard.
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Recent Activity Card */}
//             <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
//                <h3 className="text-xl font-black tracking-tight mb-6">Recent Activity</h3>
//                <div className="flex flex-col items-center justify-center py-10 text-gray-300">
//                   <div className="text-5xl mb-4">🛒</div>
//                   <p className="font-bold text-sm">No recent orders found.</p>
//                   <button className="mt-4 text-black font-black text-xs uppercase underline">Start Shopping</button>
//                </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper Component for UI
// const DetailBox = ({ label, value }) => (
//   <div className="space-y-1">
//     <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">{label}</p>
//     <div className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-800">
//       {value}
//     </div>
//   </div>
// );

// export default Profile;




// import React from 'react';

// const Profile = () => {
//   const dummyUser = {
//     fullName: "John Doe",
//     email: "john@example.com",
//     phone: "9876543210",
//     role: "admin",
//     gender: "Male",
//     dob: "1998-05-15",
//     address: "123, Luxury Apartment, Marine Drive, Mumbai",
//     joinDate: "April 2026"
//   };

//   return (
//     <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
//       {/* Page Header */}
//       <div className="bg-black text-white pt-16 pb-24 px-6">
//         <div className="max-w-6xl mx-auto flex justify-between items-end">
//           <div>
//             <h1 className="text-5xl font-black tracking-tighter">MY ACCOUNT</h1>
//             <p className="text-gray-400 mt-2 font-medium">Manage your profile, addresses and orders</p>
//           </div>
//           <div className="hidden md:block text-right">
//             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Member Since</p>
//             <p className="text-sm font-bold">{dummyUser.joinDate}</p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto w-full -mt-12 px-6 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* LEFT COLUMN: Sidebar */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 p-8 sticky top-10">
//               <div className="flex flex-col items-center text-center">
//                 <div className="relative group cursor-pointer">
//                   <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center text-4xl font-black text-white border-8 border-gray-50 shadow-xl">
//                     {dummyUser.fullName.charAt(0)}
//                   </div>
//                   <div className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md border border-gray-100 group-hover:bg-gray-50 transition-all">
//                     <span className="text-xs">📷</span>
//                   </div>
//                 </div>
//                 <h2 className="mt-5 text-xl font-black text-black">{dummyUser.fullName}</h2>
//                 <span className={`mt-2 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em] ${dummyUser.role === 'admin' ? 'bg-red-50 text-red-500' : 'bg-black text-white'}`}>
//                   {dummyUser.role}
//                 </span>
//               </div>

//               <nav className="mt-10 space-y-1">
//                 <NavButton icon="👤" label="Profile Info" active />
//                 <NavButton icon="📦" label="My Orders" />
//                 <NavButton icon="📍" label="Addresses" />
//                 <div className="pt-4 mt-4 border-t border-gray-50">
//                   <NavButton icon="🚪" label="Logout" danger />
//                 </div>
//               </nav>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Forms */}
//           <div className="lg:col-span-9 space-y-8">
            
//             {/* Personal Details Card */}
//             <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
//               <div className="flex justify-between items-center mb-10">
//                 <div>
//                   <h3 className="text-2xl font-black tracking-tight text-black">Personal Information</h3>
//                   <p className="text-gray-400 text-xs mt-1 font-medium">This information is private and secure.</p>
//                 </div>
//                 <button className="text-[11px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
//                   Edit Details
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
//                 <DetailBox label="Full Name" value={dummyUser.fullName} />
//                 <DetailBox label="Phone Number" value={dummyUser.phone} />
//                 <DetailBox label="Email Address" value={dummyUser.email} />
//                 <DetailBox label="Gender" value={dummyUser.gender} />
//                 <DetailBox label="Date of Birth" value={dummyUser.dob} />
//                 <DetailBox label="Default Address" value={dummyUser.address} fullWidth />
//               </div>

//               {dummyUser.role === 'admin' && (
//                 <div className="mt-12 p-6 bg-red-50/50 border border-red-100 rounded-[2rem] flex items-start gap-5">
//                   <div className="bg-white p-3 rounded-2xl shadow-sm text-xl">🛡️</div>
//                   <div>
//                     <h4 className="text-red-700 font-black text-[11px] uppercase tracking-widest">Admin Privileges Active</h4>
//                     <p className="text-red-600/80 text-[13px] mt-1 font-medium leading-relaxed">
//                       Your account has elevated permissions. Use the dashboard to manage inventory and user logs.
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Shopping Activity */}
//             <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 flex flex-col items-center justify-center text-center">
//                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-2xl mb-4">📦</div>
//                <h3 className="text-lg font-black text-black">No Recent Orders</h3>
//                <p className="text-gray-400 text-sm mt-1 max-w-xs font-medium">Looks like you haven't ordered anything in the last 30 days.</p>
//                <button className="mt-6 px-8 py-3 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-gray-800 transition-all">
//                  Browse Shop
//                </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Sub-Components
// const NavButton = ({ icon, label, active, danger }) => (
//   <button className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-[13px] transition-all ${active ? 'bg-black text-white shadow-lg shadow-gray-200' : 'text-gray-500 hover:bg-gray-50'} ${danger ? 'text-red-500 hover:bg-red-50' : ''}`}>
//     <span className="text-base">{icon}</span> {label}
//   </button>
// );

// const DetailBox = ({ label, value, fullWidth }) => (
//   <div className={`space-y-2 ${fullWidth ? 'md:col-span-2' : ''}`}>
//     <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] ml-1">{label}</label>
//     <div className="w-full px-6 py-4 bg-[#fbfbfb] border border-gray-100 rounded-2xl text-[14px] font-bold text-gray-800 shadow-sm transition-all">
//       {value}
//     </div>
//   </div>
// );

// export default Profile;
import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // REAL-WORLD DATA STRUCTURE
  // Jab Context connect karoge, toh ye data 'useAuth()' se aayega
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    role: "user",      // Ise 'admin' karke check kar sakte ho toggle
    gender: "",         // Empty field (Orange dashed dikhegi)
    dob: "",            // Empty field
    address: "",        // Empty field
    joinDate: "April 2026"
  });

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      
      {/* --- PREMIUM BLACK HEADER --- */}
      <div className="bg-black text-white pt-16 pb-28 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic">My Account</h1>
            <p className="text-gray-400 mt-2 font-medium tracking-wide">Manage your profile, addresses and orders</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-1">Member Since</p>
            <p className="text-sm font-bold tracking-tight">{userData.joinDate}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full -mt-16 px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT SIDEBAR: PROFILE CARD --- */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 sticky top-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative group cursor-pointer">
                  <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center text-4xl font-black text-white border-8 border-gray-50 shadow-xl transition-transform group-hover:scale-105">
                    {userData.fullName.charAt(0)}
                  </div>
                  <div className="absolute bottom-1 right-1 bg-white p-2.5 rounded-full shadow-lg border border-gray-100 group-hover:bg-gray-50 transition-all">
                    <span className="text-xs">📷</span>
                  </div>
                </div>
                <h2 className="mt-6 text-xl font-black text-black tracking-tight">{userData.fullName}</h2>
                <span className={`mt-2 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-sm
                  ${userData.role === 'admin' ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-black text-white'}`}>
                  {userData.role}
                </span>
              </div>

              <nav className="mt-12 space-y-2">
                <SidebarBtn icon="👤" label="Profile Info" active />
                <SidebarBtn icon="📦" label="My Orders" />
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <SidebarBtn icon="🚪" label="Logout" danger />
                </div>
              </nav>
            </div>
          </div>

          {/* --- RIGHT CONTENT: PERSONAL INFO --- */}
          <div className="lg:col-span-9 space-y-8">
            
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 transition-all">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h3 className="text-2xl font-black tracking-tighter text-black uppercase italic">Personal Information</h3>
                  <p className="text-gray-400 text-[11px] mt-1 font-bold uppercase tracking-widest">Update your identity and contact details</p>
                </div>
                {!isEditing && (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="text-[11px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
                  >
                    Edit Details
                  </button>
                )}
              </div>

              {/* GRID OF FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <EditableBox label="Full Name" value={userData.fullName} isEditing={isEditing} />
                <EditableBox label="Phone Number" value={userData.phone} isEditing={isEditing} />
                <EditableBox label="Email Address" value={userData.email} isEditing={isEditing} />
                <EditableBox label="Gender" value={userData.gender} isEditing={isEditing} type="select" />
                <EditableBox label="Date of Birth" value={userData.dob} isEditing={isEditing} type="date" />
                <EditableBox label="Full Address" value={userData.address} isEditing={isEditing} type="textarea" fullWidth />
              </div>

              {/* ADMIN PRIVILEGES (Only visible if role is admin) */}
              {userData.role === 'admin' && (
                <div className="mt-14 p-8 bg-red-50/40 border border-red-100 rounded-[2rem] flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-2xl border border-red-50">🛡️</div>
                  <div>
                    <h4 className="text-red-700 font-black text-[12px] uppercase tracking-[0.15em]">Admin Privileges Active</h4>
                    <p className="text-red-600/80 text-[13px] mt-2 font-medium leading-relaxed max-w-xl">
                      Your account is authorized for system management. You can access product inventory, user logs, and financial reports from the central dashboard.
                    </p>
                  </div>
                </div>
              )}

              {/* ACTION BUTTONS (Only when Editing) */}
              {isEditing && (
                <div className="mt-12 flex flex-col md:flex-row gap-4 pt-10 border-t border-gray-100">
                  <button onClick={() => setIsEditing(false)} className="flex-2 bg-black text-white py-5 px-10 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                    Save Changes
                  </button>
                  <button onClick={() => setIsEditing(false)} className="flex-1 bg-gray-100 text-gray-400 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-gray-200 hover:text-gray-600 transition-all">
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* RECENT ACTIVITY SECTION */}
            <div className="bg-white rounded-[3rem] shadow-sm border border-gray-50 p-16 flex flex-col items-center justify-center text-center">
               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-4xl mb-6 grayscale opacity-20 border border-gray-100">🛒</div>
               <h3 className="text-xl font-black text-black uppercase tracking-tight italic">No Recent Orders</h3>
               <p className="text-gray-400 text-sm mt-2 max-w-xs font-medium">Your shopping cart is waiting. Start your journey with our latest collections.</p>
               <button className="mt-8 px-10 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-all shadow-lg">
                 Start Shopping
               </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- MODERN SUB-COMPONENTS ---

const SidebarBtn = ({ icon, label, active, danger }) => (
  <button className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-[13px] transition-all duration-300
    ${active ? 'bg-black text-white shadow-xl shadow-gray-300 translate-x-1' : 'text-gray-500 hover:bg-gray-50 hover:text-black'} 
    ${danger ? 'text-red-500 hover:bg-red-50 hover:text-red-600' : ''}`}>
    <span className="text-xl">{icon}</span> {label}
  </button>
);

const EditableBox = ({ label, value, isEditing, type = "text", fullWidth }) => {
  const isMissing = !value && !isEditing;
  debugger

  return (
    <div className={`space-y-3 ${fullWidth ? 'md:col-span-2' : ''}`}>
      <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.25em] ml-1">{label}</label>
      
      {isEditing ? (
        type === "textarea" ? (
          <textarea className="w-full px-6 py-5 bg-gray-50 border border-black/5 rounded-[1.5rem] text-[15px] font-bold focus:bg-white focus:border-black/20 outline-none transition-all shadow-inner" rows="4" defaultValue={value} />
        ) : type === "select" ? (
          <select className="w-full px-6 py-5 bg-gray-50 border border-black/5 rounded-[1.5rem] text-[15px] font-bold focus:bg-white focus:border-black/20 outline-none appearance-none cursor-pointer">
            <option value="">Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <input type={type} className="w-full px-6 py-5 bg-gray-50 border border-black/5 rounded-[1.5rem] text-[15px] font-bold focus:bg-white focus:border-black/20 outline-none transition-all shadow-inner" defaultValue={value} />
        )
      ) : (
        <div className={`w-full px-7 py-5 rounded-[1.5rem] text-[15px] font-bold transition-all flex justify-between items-center 
          ${isMissing 
            ? 'bg-orange-50/40 border-2 border-dashed border-orange-200 text-orange-400' 
            : 'bg-gray-50 border border-gray-50 text-gray-800 shadow-sm hover:shadow-md cursor-default'}`}>
          <span className="tracking-tight">{value || `Add ${label}`}</span>
          {isMissing && (
            <span className="text-[9px] bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase tracking-tighter">Required</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;