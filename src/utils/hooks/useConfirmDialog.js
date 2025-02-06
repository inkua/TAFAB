import { useState } from "react";
import ConfirmDialog from "@/app/components/ConfirmDialog/ConfirmDialog";

export function useConfirmDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [resolvePromise, setResolvePromise] = useState(null);

    const confirm = () => {
        return new Promise((resolve) => {
            setResolvePromise(() => resolve);
            setIsOpen(true);
        });
    };

    const handleConfirm = (value) => {
        if (resolvePromise) {
            resolvePromise(value); // Resuelve la promesa
            setIsOpen(false);
        }
    };

    return {
        confirm,
        ConfirmDialogComponent: (
            <ConfirmDialog
                isModalOpen={isOpen}
                setIsModalOpen={setIsOpen}
                onConfirm={() => handleConfirm(true)}
                onCancel={() => handleConfirm(false)}
            />
        ),
    };
}
