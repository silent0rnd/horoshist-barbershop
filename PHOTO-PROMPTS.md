# Промты для генерации фотографий — Хорошист

Все кадры должны попадать в ключ героя (`hero-night-sign.png`): почти чёрный фон, тёплый янтарный практический свет, глубокие тени, малая ГРИП, кинематографичная цветокоррекция.

## Базовый стилевой блок

Дописывайте в конец **каждого** промта:

```
dark moody barbershop interior, near-black background with deep brown and amber tones,
warm practical lighting only — Edison bulbs, backlit mirror, amber wall sconces,
strong warm rim light on the subject, deep falloff into shadow, low-key lighting,
shallow depth of field, 85mm lens, f/1.8, cinematic color grade with orange highlights,
photorealistic, subtle film grain, high detail.

Negative: daylight, white subway tile, bright white walls, cool blue or fluorescent light,
flat even lighting, HDR, oversaturated, text, letters, logos, watermark, cartoon, illustration.
```

Формат файлов: PNG, ~1400 px по длинной стороне. Класть в указанные папки.

---

# A. Нужно сейчас

Единственный слот в коде, где сейчас стоит заглушка из галереи.

### 1. `src/assets/images/price-fade.png` — соотношение **3:4** (вертикальный)

```
Extreme close-up of a barber's hands working a skin fade on the back of a young man's head,
electric clipper mid-stroke, sharp crisp fade gradient clearly visible on the nape,
hair dust catching the warm backlight, barber's forearm with a faint tattoo entering frame,
client's shoulders draped in a black cape, shot from behind and slightly above.
```

Куда идёт: левая колонка секции «Сколько стоит». Липкая, обрезается по центру.
После генерации в [PriceSection.tsx:6](src/components/PriceSection.tsx:6) убирается заглушка — скажите, я поменяю.

---

# B. Если хотите заменить CSS-блоки на фото

Сейчас сертификат нарисован стилями, а средства — текстовый список. Работает и так; фото сделает блок теплее. Если сгенерируете — я перепишу [GiftSection.tsx](src/components/GiftSection.tsx).

### 2. `src/assets/images/gift-card.png` — **16:10**

```
A matte black gift card lying at a slight angle on a dark worn leather surface,
minimal orange foil-stamped geometric mark in the corner, no readable text,
single warm amber light raking across from the left revealing the card's texture,
a folded straight razor and a small amber glass bottle blurred in the background,
product photography, top-down at 30 degrees.
```

### 3. `src/assets/images/products-shelf.png` — **4:3**

```
Four matte black cosmetic jars and bottles for men's hair styling standing on a dark walnut
shelf, blank unlabeled containers with brushed metal lids, no readable text,
warm amber LED strip glowing behind them from under the shelf edge,
dark brick wall in deep shadow behind, one jar open showing matte clay inside,
product photography, eye level, shallow focus on the front jar.
```

---

# C. Закрывает главный визуальный разрыв

Это то, о чём я писал дважды: галерея и портреты сняты при дневном свете на белой плитке и разъезжаются с тёмным героем. Здесь наибольший выигрыш.

## Портреты мастеров — соотношение **3:4**, минимум 900×1200

Сейчас они 237×228 и CSS держит их шириной 176px как аватарки. Сгенерируете — я сниму ограничение и сделаю карточки во всю высоту.

### 4. `src/assets/images/masters/alexander.png`

```
Waist-up portrait of a confident man in his early thirties, short dark textured crop and a
neat full beard, wearing a black t-shirt and a black canvas apron, arms crossed,
holding barber scissors in one hand, looking straight into the camera with a calm steady gaze,
standing beside a barber chair, warm amber backlight separating him from the dark background.
```

### 5. `src/assets/images/masters/artem.png`

```
Waist-up portrait of a lean man in his late twenties, slicked-back medium hair and a
trimmed moustache, black t-shirt with rolled sleeves showing forearm tattoos,
one hand resting on the back of a leather barber chair, head slightly turned, half-smiling,
warm amber backlight, dark barbershop interior falling into shadow behind him.
```

### 6. `src/assets/images/masters/ilya.png`

```
Waist-up portrait of a young man in his mid twenties, tight skin fade and a light stubble,
black t-shirt, black beanie, holding a clipper down at his side,
relaxed posture leaning against a dark wooden counter, looking slightly off-camera,
warm amber backlight from a wall sconce, deep shadows around him.
```

## Галерея — 8 кадров

Соотношения важны: сетка задаёт спаны через `nth-child`, так что порядок менять нельзя.
Файлы перезаписываются по существующим именам в `src/assets/images/gallery/`.

| Файл | Формат | Промт |
|---|---|---|
| `barbershop-01.png` | 3:4 | `Barber blow-drying a young man's hair with a black hairdryer, hair lifting in the airflow, both reflected in a large backlit mirror, warm amber glow around the mirror frame` |
| `barbershop-02.png` | 4:3 | `Barber's hands styling a client's hair with fingers and a comb, extreme close-up on the crown, precise defined strands, warm rim light from behind` |
| `barbershop-03.png` | 4:3 | `Wide shot of a dark barbershop floor, three leather chairs in a row, two barbers working on clients, hanging Edison bulbs casting warm pools of light, the far end of the room in deep shadow` |
| `barbershop-04.png` | 3:4 | `Close-up of a barber checking the symmetry of a haircut, holding a hand mirror behind the client's head, client's face lit by warm amber light from the side` |
| `barbershop-05.png` | 3:4 | `Close-up of a straight razor finishing a clean neckline on a client's nape, hot towel steaming on the counter beside them, warm amber light, dark background` |
| `barbershop-06.png` | 3:4 | `Barber leaning in to detail a beard line with a trimmer, client's face in three-quarter profile lit from one side, deep shadow filling the other half of the frame` |
| `barbershop-08.png` | 3:4 | `Barber standing at a mirror station wiping down his tools, clippers combs and scissors laid out on dark leather, warm amber sconce above, his figure silhouetted against the mirror glow` |
| `barbershop-09.png` | 1:1 | `Detail still life of barber tools on a dark counter — straight razor, clipper, two combs, a small amber glass bottle, arranged in a loose row, single warm light raking across from the right` |

Если генерируете галерею — скажите, и я заодно уберу мёртвое поле `size` в
[constants.ts](src/constants.ts): оно сейчас ни на что не влияет, спаны задаются
правилами `.gallery-tile:nth-child(N)` в CSS.

---

## Порядок, если делать не всё сразу

1. **A** — закрывает единственную заглушку в коде.
2. **C, портреты** — самый заметный выигрыш на единицу работы.
3. **C, галерея** — 8 кадров, но именно она сейчас ломает единство стиля.
4. **B** — приятно, но CSS-версия и так держит блок.
