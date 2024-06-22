import {  Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";


export default function EditStudentInfo() {
  

    const [isOpen, setIsOpen] = useState(false)
    const [studentName, setStudentName] =useState("Student Name")
    const [studentClass, setStudentClass ]=useState("4")


    const closeModal = () => {
        setIsOpen(false)
      }
      const openModal = () => {
        setIsOpen(true)
      }

      const handleSubmit = () =>{
        closeModal()
      }





  return (
    <>
    <div>
    <button
        type="button"
        id="newProjectBtn"
        onClick={openModal}
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border-2"
      >
        Edit Info
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[500px]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="mb-3 text-lg text-gray-700  font-medium leading-6 text-gray-900"
                  >
                    Edit Student Info
                  </Dialog.Title>
                  <div>
                  <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                        <input type="text" name="name" id="email" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Class:</label>
                        <input type="text" name="password" id="password" value={studentClass+" th Class"} onChange={(e) => setStudentClass(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                    </div>
                    <button type="submit" className="w-[200] bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Update</button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>    
    </div>
    </>
  );
}
