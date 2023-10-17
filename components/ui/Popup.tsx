import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
const Popup = () => {
  return (
    <div className='text-black'>
        <AlertDialog>
          <AlertDialogTrigger className='bg-[#f6a339] hover:bg-[#ab7837] px-6 py-2 text-sm rounded-[7px] mt-4'>Read more</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Event Name</AlertDialogTitle>
              <AlertDialogDescription>
                Decreption of event , DATE , TIME , PARTCIPANTS
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default Popup
