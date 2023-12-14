/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';


interface PortfolioItem {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    details: string; // Additional details to show in the modal
  };

  const PortfolioItemComponent: React.FC<PortfolioItem & { onOpenModal: () => void }> = ({
    name,
    role,
    description,
    imageUrl,
    onOpenModal, // Renamed for clarity
  }) => {
    return (
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={imageUrl} alt={`${name} Avatar`} />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h3>
          <span className="text-gray-500 dark:text-gray-400">{role}</span>
          <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p>
          <Button onClick={onOpenModal}>Learn More</Button> {/* Button to open modal */}
        </div>
      </div>
    );
  };
  
const PortfolioSection: React.FC<{ items: PortfolioItem[] }> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* ... your other JSX code ... */}
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {items.map((item) => (
            <PortfolioItemComponent
              key={item.name}
              {...item}
              onOpenModal={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem ? <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>{selectedItem.name}</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {selectedItem.details}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal> : null}
    </>
  );
};

export default PortfolioSection;
