<?php


// variáveis que guardam os dados vindo do form 
$nomePessoa=utf8_decode($_POST['nomeSlc']);
$email=utf8_decode($_POST['emailSlc']);
$telefone=utf8_decode($_POST['foneSlc']);
$Data=date('d/m/Y');
$Hora= date("H:i:s");

require_once("class.smtp.php");

$destinatarios = 'agencia@gbrand.com.br';

$nomeDestinatario = utf8_decode("Agência GBrand");

$usuario = 'agencia@gbrand.com.br';

$senha = 'gbr501';


/*abaixo as veriaveis principais, que devem conter em seu formulario*/
$nomeRemetente = $_POST['nomePessoa'];
$assunto = utf8_decode("Nova solicitação de Contato");
$msg = "
<b>Nome do cliente:</b> $nomePessoa<br>
<b>Email:</b> $email<br>
<b>Telefone:</b> $telefone<br>
Enviado do site da GBrand em $Data as $Hora 

";


/*********************************** A PARTIR DAQUI NAO ALTERAR ************************************/

include_once("class.phpmailer.php");

$To = $destinatarios;
$Subject = $assunto;
$Message = $msg;

$Host = 'smtp.'.substr(strstr($usuario, '@'), 1);
$Username = $usuario;
$Password = $senha;
$Port = "587";

$mail = new PHPMailer();
$body = $Message;
$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host = $Host; // SMTP server
$mail->SMTPDebug = 0; // enables SMTP debug information (for testing)
// 1 = errors and messages
// 2 = messages only
$mail->SMTPAuth = true; // enable SMTP authentication
$mail->Port = $Port; // set the SMTP port for the service server
$mail->Username = $Username; // account username
$mail->Password = $Password; // account password

$mail->SetFrom($usuario, $nomeDestinatario);
$mail->Subject = $Subject;
$mail->MsgHTML($body);
$mail->AddAddress($To, "");


if ($mail->Send()) {
        echo "<p class='lead'>Solicitação enviada com sucesso!</p>";
}else{
        echo "<script>alert('Erro ao enviar e-mail".print($mail->ErrorInfo)."');</script>";
}


?>