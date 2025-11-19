import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function getProtectedMemberPdfBlob(members) {
  const doc = new jsPDF();
  doc.text('Liste des membres', 10, 10);

  const rows = members.map(member => [
    member.name || member.denomination,
    member.email || '',
    member.zone || '',
    member.domaines || '',
    member.acronyme || ''
  ]);

  doc.autoTable({
    head: [['Nom', 'Email', 'Zone', 'Domaines', 'Acronyme']],
    body: rows,
    startY: 20
  });

  // Génère le PDF sous forme de "Blob" avec des permissions restreintes
  // Permissions possibles : 'print', 'modify', 'copy', 'annot-forms'
  // En ne spécifiant aucune permission, nous les désactivons toutes.
  const pdfBlob = doc.output('blob', {
    encryption: {
      userPermissions: [], // Vide = aucune permission
    }
  });
  
  return pdfBlob;
}
