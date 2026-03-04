import '../styles/Modal.css';

function Modal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-message">
          {message}
        </div>
        <div className="modal-actions">
          {onCancel && (
            <button className="btn-secondary" onClick={onCancel}>
              {cancelText || 'Cancel'}
            </button>
          )}
          <button className="btn-primary" onClick={onConfirm}>
            {confirmText || 'OK'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
