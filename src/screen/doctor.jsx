// src/DoctorList.js
import React, { useState } from 'react';
import Navbar from './navbar';

const doctors = [
    {
        id: 1,
        name: 'Dr. Ayesha Khan',
        specialty: 'Cardiologist',
        experience: '12 years',
        hospital: 'Aga Khan University Hospital, Karachi',
        contact: 'ayesha.khan@agakhan.edu',
        phone: '+92 300 1234567',
      },
      {
        id: 2,
        name: 'Dr. Faisal Siddiqui',
        specialty: 'Dermatologist',
        experience: '8 years',
        hospital: 'Shaukat Khanum Memorial Hospital, Lahore',
        contact: 'faisal.siddiqui@skm.org.pk',
        phone: '+92 321 7654321',
      },
      {
        id: 3,
        name: 'Dr. Rabia Ahmed',
        specialty: 'Neurologist',
        experience: '15 years',
        hospital: 'Punjab Institute of Neurosciences, Lahore',
        contact: 'rabia.ahmed@pni.edu.pk',
        phone: '+92 333 9876543',
      },
      {
        id: 4,
        name: 'Dr. Zahid Hussain',
        specialty: 'Oncologist',
        experience: '10 years',
        hospital: 'Indus Hospital, Karachi',
        contact: 'zahid.hussain@indushospital.org.pk',
        phone: '+92 311 4567890',
      },
      {
        id: 5,
        name: 'Dr. Samina Malik',
        specialty: 'Pediatrician',
        experience: '20 years',
        hospital: 'Children’s Hospital, Lahore',
        contact: 'samina.malik@chlahore.edu.pk',
        phone: '+92 300 6543210',
      },
      {
        id: 6,
        name: 'Dr. Tariq Mahmood',
        specialty: 'Orthopedic Surgeon',
        experience: '18 years',
        hospital: 'Combined Military Hospital (CMH), Rawalpindi',
        contact: 'tariq.mahmood@cmh.edu.pk',
        phone: '+92 345 1231234',
      },
      {
        id: 7,
        name: 'Dr. Zainab Farooq',
        specialty: 'Gastroenterologist',
        experience: '14 years',
        hospital: 'Liaquat National Hospital, Karachi',
        contact: 'zainab.farooq@lnh.edu.pk',
        phone: '+92 322 1112233',
      },
    ];

const DoctorList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center  bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Doctor List */}
        <div className="w-full md:w-1/3 bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Doctor List</h2>
          <ul className="space-y-4">
            {doctors.map((doctor) => (
              <li
                key={doctor.id}
                className={`p-4 cursor-pointer rounded-lg hover:bg-red-500 hover:text-white transition ${
                  selectedDoctor?.id === doctor.id
                    ? 'bg-red-500 text-white'
                    : 'bg-white'
                }`}
                onClick={() => handleDoctorClick(doctor)}
              >
                <p className="font-semibold">{doctor.name}</p>
                <p className="text-gray-600">{doctor.specialty}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Doctor Details */}
        <div className="w-full md:w-2/3 p-6">
          {selectedDoctor ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {selectedDoctor.name}
              </h2>
              <p>
                <strong>Specialty: </strong>
                {selectedDoctor.specialty}
              </p>
              <p>
                <strong>Experience: </strong>
                {selectedDoctor.experience}
              </p>
              <p>
                <strong>Email: </strong>
                {selectedDoctor.contact}
              </p>
              <p>
                <strong>Phone: </strong>
                {selectedDoctor.phone}
              </p>
            </div>
          ) : (
            <p>Please select a doctor to see details.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default DoctorList;
