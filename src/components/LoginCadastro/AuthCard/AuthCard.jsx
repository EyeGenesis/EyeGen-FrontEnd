import { useState } from "react";
import styles from "./AuthCard.module.css";

// --- IMPORTS DE IMAGENS ---
// Verifique se a quantidade de "../" está correta para a sua estrutura de pastas.
// Se a imagem quebrar, adicione ou remova um "../"
import iconUser from "../../../assets/img/user.svg";
import iconEmail from "../../../assets/img/email.svg";
import iconLock from "../../../assets/img/cadeado.svg";
import ImagemLogin from "../../../assets/img/MulherCega.png";
import ImagemCadastro from "../../../assets/img/MulherCega2.png";
import Seta_Voltar from "../../../assets/img/SetaVoltar.svg";
import LogoEyegen from "../../../assets/img/eyegen.svg";
import IconGoogle from "../../../assets/img/google.svg";
import IconApple from "../../../assets/img/apple.svg";
import IconFacebook from "../../../assets/img/facebook.svg";

export default function AuthCard() {
  // 1. O ESTADO PRINCIPAL: Controla a troca de tela (Login ou Cadastro)
  const [isLogin, setIsLogin] = useState(true);

  // Estados dos Inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  // Validação de e-mail simples
  function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Lógica do Login
  function handleLogin() {
    if (!email.trim())
      return setErro("Por favor, insira seu usuário ou e-mail.");
    if (!senha.trim()) return setErro("Por favor, insira sua senha.");
    if (senha.length < 6)
      return setErro("A senha precisa ter ao menos 6 caracteres.");

    alert("Login realizado com sucesso!");
  }

  // Lógica do Cadastro
  function handleCadastro() {
    if (!nome || !email || !senha || !confirmarSenha)
      return setErro("Por favor, preencha todos os campos.");
    if (!validarEmail(email)) return setErro("Insira um e-mail válido.");
    if (senha !== confirmarSenha) return setErro("As senhas não coincidem.");

    alert("Cadastro realizado com sucesso!");
  }

  // Função Mestra de Submit (decide qual função chamar)
  function handleSubmit() {
    setErro(""); // Limpa erros anteriores
    if (isLogin) {
      handleLogin();
    } else {
      handleCadastro();
    }
  }

  // Função para trocar de aba e limpar erros
  function toggleMode(mode) {
    setIsLogin(mode);
    setErro("");
  }

  return (
    // ⚠️ ESTA DIV ABAIXO (pageWrapper) É ESSENCIAL PARA O FUNDO AZUL E CENTRALIZAÇÃO
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        {/* --- COLUNA ESQUERDA (FORMULÁRIO) --- */}
        <div className={styles.colEsquerda}>
          {/* LOGO */}
          <div className={styles.logoArea}>
            <img src={LogoEyegen} alt="Logo Eyegen" className={styles.logo} />
            <span className={styles.logoTexto}>EYEGEN</span>
          </div>

          {/* TÍTULO DINÂMICO */}
          <div className={styles.bemVindo}>
            {isLogin ? (
              <h2>Seja-bem vindo(a) de volta!</h2>
            ) : (
              <p className={styles.subTexto}>
                A tecnologia a favor da sua liberdade{" "}
                <a href="#">começa aqui.</a>
              </p>
            )}
          </div>

          {/* ABAS DE NAVEGAÇÃO (ENTRAR / CADASTRAR) */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${isLogin ? styles.active : ""}`}
              onClick={() => toggleMode(true)}
            >
              Entrar
            </button>
            <button
              className={`${styles.tab} ${!isLogin ? styles.active : ""}`}
              onClick={() => toggleMode(false)}
            >
              Cadastre-se
            </button>
          </div>

          {/* INPUTS DO FORMULÁRIO */}
          <div className={styles.inputsArea}>
            {/* NOME (Só aparece no cadastro) */}
            {!isLogin && (
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  className={styles.input}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <span className={styles.icon}>
                  <img src={iconUser} alt="Ícone usuário" />
                </span>
              </div>
            )}

            {/* EMAIL (Serve para ambos) */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder={
                  isLogin ? "Insira seu usuário ou e-mail" : "Insira seu e-mail"
                }
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={styles.icon}>
                <img src={isLogin ? iconUser : iconEmail} alt="Ícone email" />
              </span>
            </div>

            {/* SENHA */}
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Insira sua senha"
                className={styles.input}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className={styles.icon}>
                <img src={iconLock} alt="Ícone cadeado" />
              </span>
            </div>

            {/* CONFIRMAR SENHA (Só aparece no cadastro) */}
            {!isLogin && (
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  className={styles.input}
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
                <span className={styles.icon}>
                  <img src={iconLock} alt="Ícone cadeado" />
                </span>
              </div>
            )}

            {/* MENSAGEM DE ERRO */}
            {erro && <p className={styles.erro}>{erro}</p>}
          </div>

          {/* BOTÃO PRINCIPAL DE AÇÃO */}
          <button
            className={`${styles.botaoEntrar} ${
              !isLogin ? styles.btnBlue : ""
            }`}
            onClick={handleSubmit}
          >
            {isLogin ? "Entrar" : "Cadastrar-se"}
          </button>

          {/* ÁREA DE LOGIN SOCIAL (Só aparece no login) */}
          {isLogin && (
            <>
              <div className={styles.divisor}>
                <span>
                  <strong>Entrar</strong> com outros
                </span>
              </div>

              <button className={styles.botaoSocial}>
                <img src={IconGoogle} alt="Google" />
                <span>
                  Entrar com <strong>Google</strong>
                </span>
              </button>

              <button className={`${styles.botaoSocial} ${styles.apple}`}>
                <img src={IconApple} alt="Apple" />
                <span>
                  Entrar com <strong>Apple</strong>
                </span>
              </button>

              <button className={`${styles.botaoSocial} ${styles.facebook}`}>
                <img src={IconFacebook} alt="Facebook" />
                <span>
                  Entrar com <strong>Facebook</strong>
                </span>
              </button>
            </>
          )}
        </div>

        {/* --- COLUNA DIREITA (IMAGEM) --- */}
        <div className={styles.colDireita}>
          <img
            src={isLogin ? ImagemLogin : ImagemCadastro}
            className={styles.imagemDireita}
            alt="Ilustração decorativa"
          />
        </div>

        {/* BOTÃO VOLTAR (FLUTUANTE) */}
        <div className={styles.botaoVoltar}>
          <button onClick={() => window.history.back()}>
            <img src={Seta_Voltar} alt="Voltar" />
          </button>
        </div>
      </div>
    </div>
  );
}
