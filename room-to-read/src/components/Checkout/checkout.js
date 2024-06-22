import {Fragment, useState} from 'react'
import { Dialog, Transition } from "@headlessui/react";


const CheckIn = () =>{
    
    const [studentName , setStudentName ] = useState("")
    const [bookName , setBookName] = useState("")
    const [bookCode , setBookCode] = useState("")
    const [isOpen, setIsOpen] = useState(false)
   


    const closeModal = () => {
        setIsOpen(false)
      }
      const openModal = () => {
        setIsOpen(true)
      }

    const handleSubmit = (event) =>{
        event.preventDefault();
        openModal()
    } 

    return(
        <>
    <div className='m-10'>
     <div className='m-10'>
        <form onSubmit={event => handleSubmit(event)} className='w-[500]'>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                    <input type="text" name="name" id="email" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Class:</label>
                    <input type="text" name="password" id="password" value={bookName} onChange={(e) => setBookName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Class:</label>
                    <input type="text" name="password" id="password" value={bookCode} onChange={(e) => setBookCode(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                </div>
                <button type="submit" className="w-[200] bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Update</button>
            </form>
        </div>

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
                  <div className=" w-[400px] block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 m-3">
                        <div className="flex flex-row">
                            <label className="m-2 font-semibold">Name:</label>
                            <p className="m-2">Student name</p>
                        </div>
                        
                        <div className="flex flex-row">
                            <label className="m-2 font-semibold">Class:</label>
                            <p className="m-2">Class VI</p>
                        </div>

                        <div className="flex flex-col">
                            <label className="m-2 font-semibold">Books issude to Student:</label>
                            <p className="m-2">Book name 1</p>
                            <p className="m-2">Book name 2</p>
                        </div>
                        <button onClick={closeModal} className="w-[200] bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Close</button>
                </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </div>
      </>
    
    )
}


export default CheckIn