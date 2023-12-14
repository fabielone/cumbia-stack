import { Button, Modal } from 'flowbite-react';

interface ProjectDetails {
  title: string;
  description: string;
  // Add more fields as necessary
}

export default function ModalPortfolio({ project, isOpen, onClose }: { project: ProjectDetails, isOpen: boolean, onClose: () => void }) {
  return (
    <>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>{project.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
            {/* Additional project details can go here */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
