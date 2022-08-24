import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type { MediaModalProps } from './types';
import { formatDate, getImageUrl } from 'utils';

function MediaModal({ data, show, onClose }: MediaModalProps) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full text-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="align-middle w-full max-w-md transform overflow-hidden bg-white rounded-2xl text-left p-6 shadow-xl transition-all">
                {data.backdrop_path && (
                  <img
                    className="w-[calc(100%_+_3rem)] max-w-none -mt-6 -mx-6 mb-6"
                    src={getImageUrl(data.backdrop_path, 500)}
                    alt={data.title}
                  />
                )}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-zinc-900 leading-6"
                >
                  {data.title}
                  {data.date ? ` (${formatDate(data.date)})` : ''}
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-sm text-zinc-500">{data.overview}</p>
                </div>
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-zinc-100 hover:bg-zinc-200 border border-transparent text-zinc-900 text-sm font-medium text-zinc-900 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MediaModal;
