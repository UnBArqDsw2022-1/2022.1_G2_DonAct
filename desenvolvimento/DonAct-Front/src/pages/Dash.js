import React, { useState, useEffect } from "react";
import NavbarSearch from "../components/NavbarSearch";
import "../styles/dash.css";

const anuncios = [
	{
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    {
		nome: "Ação no viaduto da Rua 05",
        descricao: "Muitos moletons para moradores de rua",
        data:"24/09/2022"
	},
    

	
];

const Dash = (props) => {
	const [invisibleProducts, setInvisibleProducts] = useState([]);

	const [productView, setProductView] = useState([]);

	const [productViewCount, setProductViewCount] = useState(0);

	useEffect(() => {
		const productViewCount = Math.floor(window.innerWidth / 288) * 3;
		setProductViewCount(productViewCount);
		setProductView(anuncios.slice(0, productViewCount));
		if (productView.length % Math.floor(window.innerWidth / 288) == 0) {
			setInvisibleProducts([]);
		} else {
			let invisibleElements = [];
			for (
				let index = 0;
				index <
				Math.floor(window.innerWidth / 288) -
					(productView.length % Math.floor(window.innerWidth / 288));
				index++
			) {
				invisibleElements.push(
					<div style={{ width: "14em", margin: "2em" }}></div>,
				);
			}
			setInvisibleProducts(invisibleElements);
		}
	}, []);
	const gradeExpandHandle = () => {
		const tmpProductViewCount =
			productViewCount + Math.floor(window.innerWidth / 288) * 3;
		setProductViewCount(tmpProductViewCount);
		setProductView(anuncios.slice(0, tmpProductViewCount));
		const tmpProductView = anuncios.slice(0, tmpProductViewCount);
		if (tmpProductView.length % Math.floor(window.innerWidth / 288) == 0) {
			setInvisibleProducts([]);
		} else {
			let invisibleElements = [];
			for (
				let index = 0;
				index <
				Math.floor(window.innerWidth / 288) -
					(tmpProductView.length %
						Math.floor(window.innerWidth / 288));
				index++
			) {
				invisibleElements.push(
					<div style={{ width: "14em", margin: "2em" }}></div>,
				);
			}
			setInvisibleProducts(invisibleElements);
		}
	};

	return (
		<div id="searchContainer">
			<NavbarSearch></NavbarSearch>
			<div>
				<div id="grade-header">
					<div id="grade-title">
						<h1>Ações sociais</h1>
					</div>
					
				</div>

				

				<div className="gradeContainer">
					{productView.map((itens, index) => (
						<div className="itens-container" key={index}>
							<div className="itens-title">
								
								<label>{itens.nome}</label>
                                <label>{itens.descricao}</label>
                                <label>{itens.data}</label>
							</div>
						</div>
					))}
					{invisibleProducts}
					<button
						onClick={() => {
							gradeExpandHandle();
						}}
						className="gradeExpand"
					>
						&middot;&middot;&middot;
					</button>
				</div>
			</div>

			
		</div>
	);
};

export default Dash;