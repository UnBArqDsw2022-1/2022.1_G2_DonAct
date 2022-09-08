import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/components/Modal.css";
import "../styles/components/page3ModalAnnouncement.css";
import logo from "../assets/logo_header.png";
import Photo from "../assets/Photo.png";
import "../styles/components/page1ModalAnnouncement.css";
import "../styles/components/page2ModalAnnouncement.css";
import "../styles/components/page3ModalAnnouncement.css";
import defaultBookImage from "../assets/batman.png";
import setAnnouncements from "../services/setAnnouncements";
import getCategories from "../services/getCategories";



const ModalAnnouncement = ({ showModal, setShowModal }) => {
	const [page, setPage] = useState(1);
	const [announceType, setAnnounceType] = useState(1);
	const [contactChat, setContactChat] = useState(false);
	const [contactTelephone, setContactTelephone] = useState(false);
	const [contactEmail, setContactEmail] = useState(false);
	const token = sessionStorage.getItem("userToken");
	const [announceName, setAnnounceName] = useState("");
	const [announceAuthor, setAnnounceAuthor] = useState("");
	const [announceYear, setAnnounceYear] = useState("");
	const [announcePages, setAnnouncePages] = useState("");
	const [announceSynopsis, setAnnounceSynopsis] = useState("");
	const [announcePublishing_company, setAnnouncePublishing_company] =
		useState("");
	const [announceCep, setAnnounceCep] = useState("");
	const [announceContactType, setAnnounceContactType] = useState(0);
	const [announceDistrict, setAnnounceDistrict] = useState("");
	const [announceCity, setAnnounceCity] = useState("");
	const [announceDescription, setAnnounceDescription] = useState("");
	const [announcePrice, setAnnouncePrice] = useState("");
	const [announceCat, setAnnounceCat] = useState("");
	const [announceImage, setAnnounceImage] = useState(defaultBookImage);
	const [announceCategories, setAnnounceCategories] = useState([]);
	const [announceEstado, setAnnounceEstado] = useState("");
	const modalRef = useRef();

	const fileToBase64 = async (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (e) => reject(e);
		});

	const handleBookImage = async (e) => {
		let file = e.target.files[0];
		let imageBase64 = await fileToBase64(file);
		setAnnounceImage(imageBase64);
	};

	useEffect(async () => {
		const responseCategories = await getCategories();
		if (responseCategories) {
			setAnnounceCategories(responseCategories);
		}
	}, []);

	const handleAnnounceUpdate = async () => {
		let name = null;
		let author = null;
		let year = null;
		let pages = null;
		let synopsi = null;
		let publishing_company = null;
		let book_cover = null;
		let cep = null;
		let district = null;
		let city = null;
		let description = null;
		let price = null;
		let type = null;
		let contactType = null;
		let categoria = null;
		let Estado = null;

		if (announceName) {
			name = announceName;
		}
		if (announceAuthor) {
			author = announceAuthor;
		}
		if (announceYear) {
			year = announceYear;
		}
		if (announcePages) {
			pages = announcePages;
		}
		if (announceSynopsis) {
			synopsi = announceSynopsis;
		}
		if (announcePublishing_company) {
			publishing_company = announcePublishing_company;
		}
		if (announceImage) {
			book_cover = announceImage;
		}
		if (announceCep) {
			cep = announceCep;
		}
		if (announceDistrict) {
			district = announceDistrict;
		}
		if (announceCity && announceEstado) {
			city = announceEstado + "," + announceCity;
		}
		if (announceDescription) {
			description = announceDescription;
		}
		if (announcePrice) {
			price = announcePrice;
		}
		if (announceType) {
			type = announceType;
		}
		if (announceContactType) {
			contactType = announceContactType;
		}
		if (announceCat) {
			categoria = announceCat;
		}

		let body = {
			name: name,
			author: author,
			year: year,
			pages: pages,
			synopsi: synopsi,
			publishing_company: publishing_company,
			book_cover: book_cover,
			cep: cep,
			district: district,
			city: city,
			description: description,
			price: price,
			type: announceType,
			contactType: contactType,
			categoria: categoria,
		};
		await setAnnouncements(token, body);
		setShowModal(false);
		window.location.reload();
	};

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const animationModal = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});
	

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal],
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<div id="Background" onClick={closeModal} ref={modalRef}>
					<animated.div style={animationModal}>
						<div id="ModalWrapper">
							{page == 1 && (
								<div id="Home-announce-container">
									<img src={logo} id="Logo-home"></img>

									<div id="Annouce-options">
										<div id="Announce-title">
											<p>
												Selecione a opção desejada:
											</p>
										</div>

										<div id="Announce-buttons-container">
											<button
												onClick={() => {
													setAnnounceType(1);
												}}
												className={
													announceType == 1
														? "Announce-buttons-selected"
														: "Announce-buttons"
												}
											>
												ONG
											</button>
											<button
												onClick={() => {
													setAnnounceType(2);
												}}
												className={
													announceType == 2
														? "Announce-buttons-selected"
														: "Announce-buttons"
												}
											>
												Ação Social
											</button>
											<button
												onClick={() => {
													setAnnounceType(3);
												}}
												className={
													announceType == 3
														? "Announce-buttons-selected"
														: "Announce-buttons"
												}
											>
												Doação Independente
											</button>
										</div>

										<div
											onClick={() => {
												setPage(2);
											}}
											className="NextButton"
										>
											<p>Avançar</p>
											<div className="arrowNext">
												<span className="material-icons">
													arrow_forward_ios
												</span>
											</div>
										</div>
									</div>
								</div>
							)}
							{page == 2 && (
								<div className="Book-announce-container">
									<div className="AnnounceHeader">
										<img
											src={logo}
											className="Logo-header-announce"
										></img>
										<div className="header-title">
											<p> Cadastro </p>
										</div>
									</div>
									<div id="middle-container">
										<div id="PhotoInputDiv">
											<label For="PhotoInputButton">
												<div id="photoInput">
													<img
														src={Photo}
														id="PhotoIcon"
													></img>
													<div>Adicione Fotos</div>
													<div>
														(JPG e PNG somentes)
													</div>
												</div>
											</label>
											<input
												id="PhotoInputButton"
												type="file"
												accept="image/png, image/jpeg"
												onChangeCapture={(e) => {
													handleBookImage(e);
												}}
											></input>
										</div>
										<div id="bookInput">
											<input
												id="TitleInput"
												placeholder="Nome"
												value={announceName}
												type="input"
												onChange={(e) =>
													setAnnounceName(
														e.target.value,
													)
												}
											></input>

											<div id="midInput">
												<input
													id="AutorInput"
													placeholder="CNPJ"
													type="input"
													value={announceAuthor}
													onChange={(e) =>
														setAnnounceAuthor(
															e.target.value,
														)
													}
												></input>
												<input
													id="EditoraInput"
													placeholder=""
													type="input"
													value={
														announcePublishing_company
													}
													onChange={(e) =>
														setAnnouncePublishing_company(
															e.target.value,
														)
													}
												></input>
												<input
													id="YearInput"
													placeholder="Ano"
													type="number"
													value={announceYear}
													onChange={(e) =>
														setAnnounceYear(
															e.target.value,
														)
													}
												></input>
											</div>
											<div id="lastInput">
												<select
													id="CategoriaInput"
													placeholder="Categoria"
													value={announceCat}
													type="Input"
													onChange={(e) =>
														setAnnounceCat(
															e.target.value,
														)
													}
												>
													{announceCategories &&
														announceCategories.map(
															(
																categories,
																index,
															) => (
																<option
																	value={categories.name.toLowerCase()}
																>
																	{
																		categories.name
																	}
																</option>
															),
														)}
												</select>
												<input
													id="PageInput"
													placeholder="N° de páginas"
													type="number"
													value={announcePages}
													onChange={(e) =>
														setAnnouncePages(
															e.target.value,
														)
													}
												></input>
											</div>
										</div>
									</div>
									<div id="SinopseInputDiv">
										<textarea
											id="SinopseInput"
											placeholder="Sinopse do livro"
											type="input"
											value={announceSynopsis}
											onChange={(e) =>
												setAnnounceSynopsis(
													e.target.value,
												)
											}
										></textarea>
									</div>
									<div
										onClick={() => {
											if (
												announceAuthor != "" &&
												announceYear != "" &&
												announceName != "" &&
												announcePublishing_company !=
													"" &&
												announceYear != "" &&
												announceCategories != "" &&
												announcePages != "" &&
												announceSynopsis != "" &&
												announceImage !=
													defaultBookImage
											) {
												setPage(3);
											} else {
												alert(
													"preencha todos os dados!!",
												);
											}
										}}
										className="NextButton"
									>
										<p>Avançar</p>
										<div className="arrowNext">
											<span className="material-icons">
												arrow_forward_ios
											</span>
										</div>
									</div>
									<div
										onClick={() => {
											setPage(1);
										}}
										className="BackButton"
									>
										<div className="arrowNext">
											<span className="material-icons">
												arrow_back_ios
											</span>
										</div>

										<p>Voltar</p>
									</div>
								</div>
							)}
							{page == 3 && (
								<div className="Book-announce-container">
									<div className="AnnounceHeader">
										<img
											src={logo}
											className="Logo-header-announce"
										></img>
										<div className="header-title">
											<p>Informações do anúncio</p>
										</div>
									</div>
									<div id="ContactInfo">
										<label id="contactInfoTitle">
											Informações de contato:
										</label>
										<label
											onClick={() => {
												setContactChat(!contactChat);
												setAnnounceContactType(
													announceContactType + 1,
												);
											}}
											className={
												contactChat
													? "contactInfoOptionsSelected"
													: "contactInfoOptions"
											}
										>
											{" "}
											Desejo utilizar o chat do site
										</label>
										<label
											onClick={() => {
												setContactEmail(!contactEmail);
												setAnnounceContactType(
													announceContactType + 2,
												);
											}}
											className={
												contactEmail
													? "contactInfoOptionsSelected"
													: "contactInfoOptions"
											}
										>
											{" "}
											Desejo exibir meu email
										</label>
										<label
											onClick={() => {
												setContactTelephone(
													!contactTelephone,
												);
												setAnnounceContactType(
													announceContactType + 4,
												);
											}}
											className={
												contactTelephone
													? "contactInfoOptionsSelected"
													: "contactInfoOptions"
											}
										>
											{" "}
											Desejo exibir meu telefone
										</label>
									</div>
									<div className="CepContainerRow">
										<input
											className="CepInput"
											placeholder="CEP"
											value={announceCep}
											type="input"
											onChange={(e) => {
												setAnnounceCep(e.target.value);
											}}
										></input>
										<select
											className="CepInput"
											placeholder="Estado"
											value={announceEstado}
											type="input"
											onChange={(e) =>
												setAnnounceEstado(
													e.target.value,
												)
											}
										>
											<option>Acre (AC)</option>
											<option>Alagoas (AL)</option>
											<option>Amapá (AP)</option>
											<option>Amazonas (AM)</option>
											<option>Bahia (BA)</option>
											<option>Ceará (CE)</option>
											<option>
												Distrito Federal (DF)
											</option>
											<option>Espírito Santo (ES)</option>
											<option>Goiás (GO)</option>
											<option>Maranhão (MA)</option>
											<option>Mato Grosso (MT)</option>
											<option>
												Mato Grosso do Sul (MS)
											</option>
											<option>Minas Gerais (MG)</option>
											<option>Pará (PA)</option>
											<option>Paraíba (PB)</option>
											<option>Paraná (PR)</option>
											<option>Pernambuco (PE)</option>
											<option>Piauí (PI)</option>
											<option>Rio de Janeiro (RJ)</option>
											<option>
												Rio Grande do Norte (RN)
											</option>
											<option>
												Rio Grande do Sul (RS)
											</option>
											<option>Rondônia (RO)</option>
											<option>Roraima (RR)</option>
											<option>Santa Catarina (SC)</option>
											<option>São Paulo (SP)</option>
											<option>Sergipe (SE)</option>
											<option>Tocantins (TO)</option>
										</select>
										<input
											className="CepInput"
											placeholder="Cidade"
											value={announceCity}
											type="input"
											onChange={(e) =>
												setAnnounceCity(e.target.value)
											}
										></input>
									</div>
									<div className="CepContainerRow">
										<input
											id="BairroInput"
											placeholder="Bairro"
											value={announceDistrict}
											onChange={(e) =>
												setAnnounceDistrict(
													e.target.value,
												)
											}
										></input>
									</div>
									<div id="DescriptionRow">
										<textarea
											id="DiscriptionInput"
											placeholder="Descrição do anúncio"
											type="input"
											value={announceDescription}
											onChange={(e) =>
												setAnnounceDescription(
													e.target.value,
												)
											}
										></textarea>
									</div>
									{announceType == 2 && (
										<div id="PriceRow">
											<p>Preço: </p>
											<input
												id="PriceInput"
												placeholder="R$ 0,00"
												value={announcePrice}
												onChange={(e) =>
													setAnnouncePrice(
														e.target.value,
													)
												}
											></input>
										</div>
									)}
									<div
										className="NextButton"
										onClick={() => {
											if (
												announceCep != "" &&
												announceCity != "" &&
												announceDistrict != "" &&
												announceDescription != "" &&
												announceContactType != 0 &&
												announceEstado != ""
											) {
												handleAnnounceUpdate();
											} else {
												alert(
													"preencha todos os dados",
												);
											}
										}}
									>
										<p>Finalizar</p>
										<div className="arrowNext">
											<span className="material-icons">
												check_circle
											</span>
										</div>
									</div>
									<div
										onClick={() => {
											setPage(2);
										}}
										className="BackButton"
									>
										<div className="arrowNext">
											<span className="material-icons">
												arrow_back_ios
											</span>
										</div>

										<p>Voltar</p>
									</div>
								</div>
							)}
							<div
								id="Close"
								className="material-icons"
								onClick={() => {setShowModal(false)}}
								style={{color:"white"}}
							>
								close
							</div>
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalAnnouncement;