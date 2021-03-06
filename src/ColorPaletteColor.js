import React from "react";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./ColorPaletteColor.scss";

export default function ColorPaletteColor(props) {
  const {
    color,
    isSelected,
    id,
    selectColor,
    setColor,
    deleteColor,
    isEditing,
    setEditing,
  } = props;

  function updateColor(color) {
    setColor(id, color.hex);
  }

  return (
    <div className="color-palette-color-wrapper">
      <button
        className={`toolbar-button color-palette-color ${
          isSelected ? "color-palette-color-selected" : ""
        }`}
        aria-pressed={isSelected}
        style={{ backgroundColor: color }}
        onClick={() => selectColor(id)}
      ></button>
      <div className="color-palette-color-controls">
        <button
          className="color-palette-color-control color-palette-color-edit"
          onClick={(e) => {
            e.stopPropagation();
            setEditing(isEditing ? null : id);
          }}
        >
          <FontAwesomeIcon icon={faPalette} />
        </button>
        <button
          className="color-palette-color-control color-palette-color-delete"
          onClick={(e) => {
            e.stopPropagation();
            deleteColor(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      {isEditing && (
        <div className="color-palette-color-picker-tooltip">
          <ChromePicker disableAlpha color={color} onChange={updateColor} />
        </div>
      )}
    </div>
  );
}
