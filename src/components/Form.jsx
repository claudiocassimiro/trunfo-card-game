import React from 'react';
function Form() {
    return (
      <form>
        <label htmlFor="card-name">
          <input
            type="text"
            id="card-name"
            data-testid="name-input"
            placeholder="Insira o nome da carta"
          />
        </label>
        <label htmlFor="card-description">
          <textarea
            id="card-description"
            data-testid="description-input"
            placeholder="Insira a descrição da carta"
          >
          </textarea>
        </label>
        <label htmlFor="card-attr1">
            <input
              type="number"
              id="card-attr1"
              data-testid="attr1-input"
              placeholder="Insira o 1° atributo"
            />
        </label>
        <label htmlFor="card-attr2">
            <input
              type="number"
              id="card-attr2"
              data-testid="attr2-input"
              placeholder="Insira o 2° atributo"
            />
        </label>
        <label htmlFor="card-attr3">
            <input
              type="number"
              id="card-attr3"
              data-testid="attr3-input"
              placeholder="Insira o 3° atributo"
            />
        </label>
        <label htmlFor="image-path">
            <input 
              type="text"
              id="image-path"
              data-testid="image-input"
              placeholder="Insira o caminho da imagem"
            />
        </label>
        <label htmlFor="card-type">
            <select
              id="card-type"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
                <option value="muito raro">muito raro</option>
            </select>
        </label>
        <label htmlFor="card-super">
            <input
              type="checkbox" 
              id="card-super"
              data-testid="trunfo-input"
            />
        </label>
        <button
          type="submit"
          data-testid="save-button"
        >
            Salvar
        </button>
      </form>
    );
}

export default Form;
