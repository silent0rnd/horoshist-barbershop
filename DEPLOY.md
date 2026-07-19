# Публикация на GitHub Pages

1. Создайте на GitHub новый пустой репозиторий, например `barbershop`.
2. В папке этого сайта выполните команды:

```bash
git init
git add .
git commit -m "Первый выпуск сайта"
git branch -M main
git remote add origin https://github.com/ВАШ-ЛОГИН/barbershop.git
git push -u origin main
```

3. В репозитории откройте **Settings - Pages**.
4. В разделе **Build and deployment** выберите **GitHub Actions**.
5. После отправки изменений в ветку `main` сайт соберётся и опубликуется автоматически. Ссылка появится в этом же разделе Pages.

Для обновления сайта достаточно отправить новые изменения в ветку `main`.
