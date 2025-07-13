// --- ข้อมูล Dichotomous Key ในรูปแบบ JSON ---
const plantKey = {
    //
    // --- จุดเริ่มต้น ---
    "1": {
        type: "question",
        text: "ลักษณะใบเลี้ยงของพืชเป็นอย่างไร?",
        options: [
            { text: "มีใบเลี้ยงเพียงใบเดียว (พืชใบเลี้ยงเดี่ยว)", target: "2" },
            { text: "มีใบเลี้ยงสองใบ (พืชใบเลี้ยงคู่)", target: "20" }
        ]
    },
    //
    // --- กลุ่มใบเลี้ยงเดี่ยว ---
    "2": {
        type: "question",
        text: "ลักษณะลำต้นเป็นอย่างไร?",
        options: [
            { text: "ลำต้นล้มลุก", target: "result_tradescantia" },
            { text: "ลำต้นเป็นไม้พุ่มหรือปาล์ม", target: "3" }
        ]
    },
    "result_tradescantia": { type: "result", name_thai: "ว่านกาบหอย", name_scientific: "Tradescantia spathacea", family: "Commelinaceae" },
    "3": {
        type: "question",
        text: "พืชมีลักษณะเป็นอย่างไร?",
        options: [
            { text: "ไม้พุ่ม", target: "4" },
            { text: "ลักษณะเป็นปาล์ม", target: "6" }
        ]
    },
    "4": {
        type: "question",
        text: "ใบเดี่ยวมีรูปร่างอย่างไร?",
        options: [
            { text: "รูปหอก", target: "result_dracaena_fragrans" },
            { text: "รูปแถบ", target: "result_dracaena_cincta" }
        ]
    },
    "result_dracaena_fragrans": { type: "result", name_thai: "วาสนา", name_scientific: "Dracaena fragrans", family: "Asparagaceae" },
    "result_dracaena_cincta": { type: "result", name_thai: "เข็มสามสี", name_scientific: "Dracaena cincta", family: "Asparagaceae" },
    "6": {
        type: "question",
        text: "ลักษณะลำต้นเป็นอย่างไร?",
        options: [
            { text: "แตกกอ", target: "7" },
            { text: "ลำต้นเดี่ยว ไม่แตกกอ", target: "10" }
        ]
    },
    "7": {
        type: "question",
        text: "สีของลำต้นเป็นอย่างไร?",
        options: [
            { text: "สีเหลืองถึงเขียว", target: "result_chrysalidocarpus" },
            { text: "สีเทาอ่อนหรือน้ำตาล", target: "result_ptychosperma" },
            { text: "สีเทาเรียบ", target: "result_caryota" }
        ]
    },
    "result_chrysalidocarpus": { type: "result", name_thai: "หมากเหลือง", name_scientific: "Chrysalidocarpus lutescens", family: "Arecaceae" },
    "result_ptychosperma": { type: "result", name_thai: "หมากเขียว", name_scientific: "Ptychosperma propinquum", family: "Arecaceae" },
    "result_caryota": { type: "result", name_thai: "ปาล์มหางปลา", name_scientific: "Caryota mitis", family: "Arecaceae" },
    "10": {
        type: "question",
        text: "ลักษณะข้อปล้องเป็นอย่างไร?",
        options: [
            { text: "เป็นขีด", target: "11" },
            { text: "เป็นทรงเรขาคณิต", target: "13" }
        ]
    },
    "11": {
        type: "question",
        text: "สีของลำต้นใกล้ยอดเป็นอย่างไร?",
        options: [
            { text: "สีเขียว", target: "result_wallaceodoxa" },
            { text: "สีเขียวนวลมีขาวคลุม", target: "result_adonidia" }
        ]
    },
    "result_wallaceodoxa": { type: "result", name_thai: "หมากสง", name_scientific: "Wallaceodoxa raja-ampat", family: "Arecaceae" },
    "result_adonidia": { type: "result", name_thai: "หมากนวล", name_scientific: "Adonidia merrillii", family: "Arecaceae" },
    "13": {
        type: "question",
        text: "ลักษณะใบเป็นอย่างไร?",
        options: [
            { text: "ใบเดี่ยว", target: "result_bismarckia" },
            { text: "ใบประกอบแบบขนนก", target: "result_elaeis" }
        ]
    },
    "result_bismarckia": { type: "result", name_thai: "ตาลฟ้า", name_scientific: "Bismarckia nobilis", family: "Arecaceae" },
    "result_elaeis": { type: "result", name_thai: "ปาล์มน้ำมัน", name_scientific: "Elaeis guineensis", family: "Arecaceae" },
    //
    // --- กลุ่มใบเลี้ยงคู่ ---
    "20": {
        type: "question",
        text: "พืชมีลักษณะเป็นอย่างไร?",
        options: [
            { text: "ไม้พุ่ม", target: "21" },
            { text: "ไม้ต้น", target: "24" }
        ]
    },
    "21": {
        type: "question",
        text: "ลักษณะใบเดี่ยวเรียงตรงข้ามเป็นอย่างไร?",
        options: [
            { text: "รูปใบหอก", target: "result_ixora" },
            { text: "รูปไข่", target: "result_duranta" }
        ]
    },
    "result_ixora": { type: "result", name_thai: "เข็ม", name_scientific: "Ixora chinensis", family: "Rubiaceae" },
    "result_duranta": { type: "result", name_thai: "ชาทอง", name_scientific: "Duranta erecta", family: "Verbenaceae" },
    "24": {
        type: "question",
        text: "ลักษณะรากเป็นอย่างไร?",
        options: [
            { text: "มีรากอากาศ", target: "25" },
            { text: "ไม่มีรากอากาศ", target: "28" }
        ]
    },
    "25": {
        type: "question",
        text: "ใบเดี่ยวมีรูปร่างอย่างไร?",
        options: [
            { text: "รูปหัวใจ", target: "result_ficus_religiosa" },
            { text: "รูปรี", target: "result_ficus_annulata" }
        ]
    },
    "result_ficus_religiosa": { type: "result", name_thai: "โพธิ์", name_scientific: "Ficus religiosa", family: "Moraceae" },
    "result_ficus_annulata": { type: "result", name_thai: "ไทร", name_scientific: "Ficus annulata", family: "Moraceae" },
    "28": {
        type: "question",
        text: "ลักษณะเปลือกลำต้นเป็นอย่างไร?",
        options: [
            { text: "เรียบ", target: "29" },
            { text: "ขรุขระ", target: "37" },
            { text: "แตกเป็นเส้น", target: "42" },
            { text: "แตกเป็นสะเก็ด", target: "52" }
        ]
    },
    "29": {
        type: "question",
        text: "ลำต้นมียางหรือไม่?",
        options: [
            { text: "มียาง", target: "30" },
            { text: "ไม่มียาง", target: "33" }
        ]
    },
    "30": {
        type: "question",
        text: "ลักษณะใบเป็นอย่างไร?",
        options: [
            { text: "ใบเดี่ยว รูปไข่", target: "31" },
            { text: "ใบประกอบแบบขนนกปลายคู่", target: "result_guaiacum" }
        ]
    },
    "result_guaiacum": { type: "result", name_thai: "แก้วเจ้าจอม", name_scientific: "Guaiacum officinale", family: "Zygophyllaceae" },
    "31": {
        type: "question",
        text: "ลักษณะปลายใบและโคนใบเป็นอย่างไร?",
        options: [
            { text: "ปลายใบเรียวแหลม โคนใบสอบ", target: "result_syzygium" },
            { text: "ปลายใบเรียวแหลม โคนใบมน", target: "result_aquilaria" }
        ]
    },
    "result_syzygium": { type: "result", name_thai: "ลูกหว้า", name_scientific: "Syzygium cumini", family: "Myrtaceae" },
    "result_aquilaria": { type: "result", name_thai: "กฤษณา", name_scientific: "Aquilaria crassna", family: "Thymelaeaceae" },
    "33": {
        type: "question",
        text: "ลักษณะใบเป็นอย่างไร?",
        options: [
            { text: "ใบเดี่ยว", target: "34" },
            { text: "ใบประกอบแบบขนนก ปลายใบคี่", target: "result_adenanthera" },
            { text: "ใบประกอบแบบขนนก ปลายใบคู่", target: "result_delonix" }
        ]
    },
    "result_adenanthera": { type: "result", name_thai: "มะกล่ำต้น", name_scientific: "Adenanthera pavonina", family: "Fabaceae" },
    "result_delonix": { type: "result", name_thai: "หางนกยูงฝรั่ง", name_scientific: "Delonix regia", family: "Fabaceae" },
    "34": {
        type: "question",
        text: "ลักษณะใบรูปไข่เป็นอย่างไร?",
        options: [
            { text: "ปลายใบแหลม", target: "result_schoutenia" },
            { text: "ปลายใบมน", target: "35" }
        ]
    },
    "result_schoutenia": { type: "result", name_thai: "รวงผึ้ง", name_scientific: "Schoutenia glomerata", family: "Malvaceae" },
    "35": {
        type: "question",
        text: "ลักษณะโคนใบเป็นอย่างไร?",
        options: [
            { text: "โคนใบสอบเรียว", target: "result_elaeocarpus" },
            { text: "โคนใบมน", target: "result_psidium" }
        ]
    },
    "result_elaeocarpus": { type: "result", name_thai: "มะกอกน้ำ", name_scientific: "Elaeocarpus hygrophilus", family: "Elaeocarpaceae" },
    "result_psidium": { type: "result", name_thai: "ฝรั่ง", name_scientific: "Psidium guajava", family: "Myrsinaceae" },
    "37": {
        type: "question",
        text: "ลำต้นมียางหรือไม่? (เปลือกขรุขระ)",
        options: [
            { text: "มียาง", target: "result_butea" },
            { text: "ไม่มียาง", target: "result_tabebuia" }
        ]
    },
    "result_butea": { type: "result", name_thai: "ทองกวาว", name_scientific: "Butea monosperma", family: "Fabaceae" },
    "result_tabebuia": { type: "result", name_thai: "ชมพูพันธุ์ทิพย์", name_scientific: "Tabebuia rosea", family: "Bignoniaceae" },
    "42": {
        type: "question",
        text: "ลำต้นมียางหรือไม่? (เปลือกแตกเป็นเส้น)",
        options: [
            { text: "ไม่มียาง", target: "result_tamarindus" },
            { text: "มียาง", target: "43" }
        ]
    },
    "result_tamarindus": { type: "result", name_thai: "มะขาม", name_scientific: "Tamarindus indica", family: "Fabaceae" },
    "43": {
        type: "question",
        text: "ลักษณะใบเป็นอย่างไร?",
        options: [
            { text: "ใบประกอบแบบขนนก", target: "44" },
            { text: "ใบเดี่ยว", target: "48" }
        ]
    },
    "44": {
        type: "question",
        text: "ลักษณะปลายใบเป็นอย่างไร?",
        options: [
            { text: "ปลายใบเรียวแหลม", target: "45" },
            { text: "ปลายใบมน", target: "47" }
        ]
    },
    "45": {
        type: "question",
        text: "ลักษณะโคนใบเป็นอย่างไร?",
        options: [
            { text: "โคนใบมน", target: "result_millingtonia" },
            { text: "โคนใบสอบเรียว", target: "result_acacia" },
            { text: "โคนใบเบี้ยว", target: "result_samanea" }
        ]
    },
    "result_millingtonia": { type: "result", name_thai: "ปีบ", name_scientific: "Millingtonia hortensis", family: "Bignoniaceae" },
    "result_acacia": { type: "result", name_thai: "กระถินณรงค์", name_scientific: "Acacia auriculiformis", family: "Fabaceae" },
    "result_samanea": { type: "result", name_thai: "จามจุรี", name_scientific: "Samanea saman", family: "Fabaceae" },
    "47": {
        type: "question",
        text: "ลักษณะเด่นคืออะไร?",
        options: [
            { text: "ดอกช่อแบบแยกแขนง", target: "result_senna" },
            { text: "ผลเป็นฝักแบน", target: "result_peltophorum" },
            { text: "ผลแห้งมีปีก", target: "result_pterocarpus" }
        ]
    },
    "result_senna": { type: "result", name_thai: "ขี้เหล็ก", name_scientific: "Senna siamea", family: "Fabaceae" },
    "result_peltophorum": { type: "result", name_thai: "นนทรี", name_scientific: "Peltophorum pterocarpum", family: "Fabaceae" },
    "result_pterocarpus": { type: "result", name_thai: "ประดู่", name_scientific: "Pterocarpus macrocarpus", family: "Fabaceae" },
    "48": {
        type: "question",
        text: "ลักษณะการเรียงของใบเป็นอย่างไร?",
        options: [
            { text: "ใบเรียงสลับ", target: "49" },
            { text: "ใบเรียงตรงข้าม", target: "51" }
        ]
    },
    "49": {
        type: "question",
        text: "รูปร่างใบเป็นอย่างไร?",
        options: [
            { text: "รูปขอบขนาน", target: "result_anthoshorea" },
            { text: "รูปหัวใจ", target: "result_dipterocarpus_tuber" },
            { text: "รูปไข่", target: "result_dipterocarpus_obtusi" },
            { text: "รูปรี", target: "result_mimusops" }
        ]
    },
    "result_anthoshorea": { type: "result", name_thai: "พะยอม", name_scientific: "Anthoshorea roxburghii", family: "Dipterocarpaceae" },
    "result_dipterocarpus_tuber": { type: "result", name_thai: "ยางพลวง", name_scientific: "Dipterocarpus tuberculatus", family: "Dipterocarpaceae" },
    "result_dipterocarpus_obtusi": { type: "result", name_thai: "ยางเหียง", name_scientific: "Dipterocarpus obtusifolius", family: "Dipterocarpaceae" },
    "result_mimusops": { type: "result", name_thai: "พิกุล", name_scientific: "Mimusops elengi", family: "Sapotaceae" },
    "51": {
        type: "question",
        text: "ลักษณะเด่นคืออะไร?",
        options: [
            { text: "ใบรูปรี ปลายแหลม โคนใบสอบ", target: "result_cyrtophyllum" },
            { text: "ผลแห้งแตกกลางพู รูปไข่ปลายแหลม", target: "result_lagerstroemia_tomentosa" },
            { text: "ผลแห้งแตกกลางพู รูปกระเปาะกลม", target: "result_tectona" }
        ]
    },
    "result_cyrtophyllum": { type: "result", name_thai: "กันเกรา", name_scientific: "Cyrtophyllum fragrans", family: "Gentianaceae" },
    "result_lagerstroemia_tomentosa": { type: "result", name_thai: "เสลา", name_scientific: "Lagerstroemia tomentosa", family: "Lythraceae" },
    "result_tectona": { type: "result", name_thai: "สัก", name_scientific: "Tectona grandis", family: "Lamiaceae" },
    "52": {
        type: "question",
        text: "ลำต้นมียางหรือไม่? (เปลือกแตกเป็นสะเก็ด)",
        options: [
            { text: "มียาง", target: "53" },
            { text: "ไม่มียาง", target: "59" }
        ]
    },
    "53": {
        type: "question",
        text: "ลักษณะใบเป็นอย่างไร?",
        options: [
            { text: "ใบเดี่ยว", target: "54" },
            { text: "ใบมีลักษณะเป็นเกล็ด", target: "57" },
            { text: "ใบประกอบแบบขนนก", target: "58" }
        ]
    },
    "54": {
        type: "question",
        text: "การเรียงของใบเป็นอย่างไร?",
        options: [
            { text: "ใบเรียงเป็นวงรอบ", target: "result_alstonia" },
            { text: "ใบเรียงตรงข้าม", target: "55" },
            { text: "ใบเรียงสลับ", target: "56" }
        ]
    },
    "result_alstonia": { type: "result", name_thai: "พญาสัตบรรณ", name_scientific: "Alstonia scholaris", family: "Apocynaceae" },
    "55": {
        type: "question",
        text: "รูปร่างใบเป็นอย่างไร?",
        options: [
            { text: "รูปรี", target: "result_wrightia" },
            { text: "รูปไข่กลับ", target: "result_mammea" },
            { text: "รูปหอก", target: "result_mesua" }
        ]
    },
    "result_wrightia": { type: "result", name_thai: "โมกมัน", name_scientific: "Wrightia arborea", family: "Apocynaceae" },
    "result_mammea": { type: "result", name_thai: "สารภี", name_scientific: "Mammea siamensis", family: "Calophyllaceae" },
    "result_mesua": { type: "result", name_thai: "บุนนาค", name_scientific: "Mesua ferrea", family: "Calophyllaceae" },
    "56": {
        type: "question",
        text: "ลักษณะใบรูปไข่เป็นอย่างไร?",
        options: [
            { text: "ปลายติ่งแหลม", target: "result_parinari" },
            { text: "ปลายสอบ", target: "result_dipterocarpus_alatus" },
            { text: "ปลายมน", target: "result_pentacme" }
        ]
    },
    "result_parinari": { type: "result", name_thai: "มะพอก", name_scientific: "Parinari anamensis", family: "Chrysobalanaceae" },
    "result_dipterocarpus_alatus": { type: "result", name_thai: "ยางนา", name_scientific: "Dipterocarpus alatus", family: "Dipterocarpaceae" },
    "result_pentacme": { type: "result", name_thai: "รัง", name_scientific: "Pentacme siamensis", family: "Dipterocarpaceae" },
    "57": {
        type: "question",
        text: "สีของใบเป็นอย่างไร?",
        options: [
            { text: "สีขาวแกมเขียว", target: "result_casuarina" },
            { text: "สีเขียวเข้มหรืออมเหลือง", target: "result_juniperus" }
        ]
    },
    "result_casuarina": { type: "result", name_thai: "สนทะเล", name_scientific: "Casuarina equisetifolia", family: "Casuarinaceae" },
    "result_juniperus": { type: "result", name_thai: "สนมังกร", name_scientific: "Juniperus chinensis", family: "Cupressaceae" },
    "58": {
        type: "question",
        text: "รูปร่างใบเป็นอย่างไร?",
        options: [
            { text: "ใบขอบขนาน", target: "result_dalbergia_cochinchinensis" },
            { text: "ใบรูปรี", target: "result_schleichera" }
        ]
    },
    "result_dalbergia_cochinchinensis": { type: "result", name_thai: "พยุง", name_scientific: "Dalbergia cochinchinensis", family: "Fabaceae" },
    "result_schleichera": { type: "result", name_thai: "ตะคร้อ", name_scientific: "Schleichera oleosa", family: "Sapindaceae" },
    "59": {
        type: "question",
        text: "ลักษณะใบเป็นอย่างไร?",
        options: [
            { text: "ใบเดี่ยว", target: "60" },
            { text: "ใบประกอบแบบขนนก", target: "64" }
        ]
    },
    "60": {
        type: "question",
        text: "การเรียงของใบเป็นอย่างไร?",
        options: [
            { text: "ใบเรียงสลับ", target: "61" },
            { text: "ใบเรียงตรงข้าม", target: "62" }
        ]
    },
    "61": {
        type: "question",
        text: "รูปร่างใบเป็นอย่างไร?",
        options: [
            { text: "รูปรี", target: "result_cananga" },
            { text: "รูปไข่กลับ", target: "result_careya" }
        ]
    },
    "result_cananga": { type: "result", name_thai: "กระดังงา", name_scientific: "Cananga odorata", family: "Annonaceae" },
    "result_careya": { type: "result", name_thai: "กระโดน", name_scientific: "Careya arborea", family: "Lecythidaceae" },
    "62": {
        type: "question",
        text: "รูปร่างใบเป็นอย่างไร?",
        options: [
            { text: "รูปขอบขนาน", target: "result_lagerstroemia_floribunda" },
            { text: "รูปรี", target: "63" }
        ]
    },
    "result_lagerstroemia_floribunda": { type: "result", name_thai: "ตะแบก", name_scientific: "Lagerstroemia floribunda", family: "Lythraceae" },
    "63": {
        type: "question",
        text: "ขนาดของใบเป็นอย่างไร?",
        options: [
            { text: "ใบป้อมกว้าง ใบใหญ่", target: "result_lagerstroemia_speciosa" },
            { text: "ใบแคบเล็ก", target: "result_lagerstroemia_macrocarpa" }
        ]
    },
    "result_lagerstroemia_speciosa": { type: "result", name_thai: "อินทนินน้ำ", name_scientific: "Lagerstroemia speciosa", family: "Lythraceae" },
    "result_lagerstroemia_macrocarpa": { type: "result", name_thai: "อินทนินบก", name_scientific: "Lagerstroemia macrocarpa", family: "Lythraceae" },
    "64": {
        type: "question",
        text: "รูปร่างใบเป็นอย่างไร?",
        options: [
            { text: "รูปไข่", target: "result_cassia" },
            { text: "รูปขอบขนาน ปลายมน", target: "result_dalbergia_oliveri" },
            { text: "รูปขอบขนาน ปลายติ่งแหลม", target: "result_afzelia" }
        ]
    },
    "result_cassia": { type: "result", name_thai: "ราชพฤกษ์", name_scientific: "Cassia fistula", family: "Fabaceae" },
    "result_dalbergia_oliveri": { type: "result", name_thai: "ชิงชัน", name_scientific: "Dalbergia oliveri", family: "Fabaceae" },
    "result_afzelia": { type: "result", name_thai: "มะค่าโมง", name_scientific: "Afzelia xylocarpa", family: "Fabaceae" }
};


// --- ส่วนควบคุมการทำงานของแอป ---
document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resetButton = document.getElementById('reset-button');

    let currentNodeId = "1";

    function renderNode(nodeId) {
        const node = plantKey[nodeId];
        currentNodeId = nodeId;

        // เคลียร์เนื้อหาเก่า
        questionContainer.innerHTML = '';
        optionsContainer.innerHTML = '';

        if (node.type === "question") {
            // แสดงคำถาม
            const questionText = document.createElement('h2');
            questionText.textContent = node.text;
            questionContainer.appendChild(questionText);

            // สร้างปุ่มตัวเลือก
            node.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.text;
                button.className = 'option-button';
                button.onclick = () => renderNode(option.target);
                optionsContainer.appendChild(button);
            });

            resetButton.classList.add('hidden');

        } else if (node.type === "result") {
            // แสดงผลลัพธ์
            questionContainer.innerHTML = `
                <div class="result-name-th">${node.name_thai}</div>
                <div class="result-name-sci">${node.name_scientific}</div>
                <div class="result-family">วงศ์: ${node.family}</div>
            `;
            resetButton.classList.remove('hidden');
        }
    }

    resetButton.addEventListener('click', () => {
        renderNode("1");
    });

    // เริ่มต้นแอป
    renderNode("1");
});