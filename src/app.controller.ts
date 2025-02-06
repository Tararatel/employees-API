import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  home(): string {
    return `
			<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>API Базы Сотрудников</title>
    <style>
      /* Сброс стилей */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f9;
        color: #333;
        line-height: 1.6;
        padding: 20px;
      }
      header {
        text-align: center;
        margin-bottom: 30px;
      }
      header h1 {
        font-size: 2.5em;
        color: #2c3e50;
      }
      section {
        background: #fff;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      h2 {
        margin-bottom: 10px;
        color: #2c3e50;
      }
      h3 {
        margin: 15px 0 10px;
        color: #34495e;
      }
      .endpoint {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #e0e0e0;
      }
      .endpoint:last-child {
        border-bottom: none;
      }
      .method {
        display: inline-block;
        background: #3498db;
        color: #fff;
        padding: 4px 8px;
        border-radius: 3px;
        font-weight: bold;
        margin-right: 10px;
        text-transform: uppercase;
        font-size: 0.9em;
      }
      .path {
        font-size: 1.1em;
        color: #34495e;
      }
      pre {
        background: #ecf0f1;
        padding: 10px;
        border-radius: 3px;
        overflow-x: auto;
        font-size: 0.9em;
        margin-top: 10px;
      }
      code {
        background: #ecf0f1;
        padding: 2px 4px;
        border-radius: 3px;
      }

      li {
        list-style-type: none;
      }

      @media (max-width: 600px) {
        body {
          padding: 10px;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <h1>API Базы Сотрудников</h1>
      <p>Добро пожаловать в документацию по API базы сотрудников</p>
    </header>

    <section>
      <h2>Общее описание</h2>
      <p>
        Данное API позволяет работать с данными сотрудников. Доступны следующие
        операции: получение списка сотрудников, получение информации по
        отдельному сотруднику, добавление нового сотрудника, обновление и
        удаление сотрудника, а также сброс данных к изначальному состоянию.
      </p>
    </section>

    <section>
      <h2>Конечные точки (Endpoints)</h2>

      <!-- Home -->
      <div class="endpoint">
        <div>
          <span class="method">GET</span>
          <span class="path">/</span>
        </div>
        <p>Главная страница API. Сейчас возвращает HTML-документацию.</p>
        <p><strong>Пример ответа:</strong></p>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  ... документация API ...
&lt;/html&gt;
      </pre
        >
      </div>

      <!-- GET all employees -->
      <div class="endpoint">
        <div>
          <span class="method">GET</span>
          <span class="path">/api/employees</span>
        </div>
        <p>Получение списка всех сотрудников.</p>
        <p><strong>Пример ответа:</strong></p>
        <pre>
[
  {
    "id": 1,
    "employee_name": "Иван Иванов",
    "employee_salary": 120000,
    "employee_age": 35,
    "profile_image": "https://example.com/avatar1.jpg"
  },
  {
    "id": 2,
    "employee_name": "Пётр Петров",
    "employee_salary": 98000,
    "employee_age": 28,
    "profile_image": "https://example.com/avatar2.jpg"
  }
  // ... остальные сотрудники
]</pre
        >
      </div>

      <!-- GET one employee -->
      <div class="endpoint">
        <div>
          <span class="method">GET</span>
          <span class="path">/api/employees/:id</span>
        </div>
        <p>Получение информации о сотруднике по его идентификатору.</p>
        <p><strong>Пример запроса:</strong> <code>/api/employees/1</code></p>
        <p><strong>Пример ответа:</strong></p>
        <pre>
{
  "id": 1,
  "employee_name": "Иван Иванов",
  "employee_salary": 120000,
  "employee_age": 35,
  "profile_image": "https://example.com/avatar1.jpg"
}</pre
        >
      </div>

      <!-- POST create employee -->
      <div class="endpoint">
        <div>
          <span class="method">POST</span>
          <span class="path">/api/employees</span>
        </div>
        <p>
          Добавление нового сотрудника. Передаваемые данные должны
          соответствовать <code>CreateEmployeeDto</code>.
        </p>
        <p><strong>Пример тела запроса (JSON):</strong></p>
        <pre>
{
  "employee_name": "Анна Смирнова",
  "employee_salary": 110000,
  "employee_age": 30,
  "profile_image": "https://example.com/avatar3.jpg"
}</pre
        >
        <p><strong>Пример ответа:</strong> <em>Новый сотрудник добавлен</em></p>
      </div>

      <!-- POST reset employees -->
      <div class="endpoint">
        <div>
          <span class="method">POST</span>
          <span class="path">/api/employees/reset</span>
        </div>
        <p>Сброс данных сотрудников к исходному состоянию.</p>
        <p><strong>Пример ответа:</strong></p>
        <pre>
{
  "message": "Данные сброшены к изначальному состоянию"
}</pre
        >
      </div>

      <!-- DELETE employee -->
      <div class="endpoint">
        <div>
          <span class="method">DELETE</span>
          <span class="path">/api/employees/:id</span>
        </div>
        <p>Удаление сотрудника по идентификатору.</p>
        <p><strong>Пример запроса:</strong> <code>/api/employees/1</code></p>
        <p><strong>Пример ответа:</strong> <em>Сотрудник удалён</em></p>
      </div>

      <!-- PATCH update employee -->
      <div class="endpoint">
        <div>
          <span class="method">PATCH</span>
          <span class="path">/api/employees/:id</span>
        </div>
        <p>
          Обновление данных сотрудника по идентификатору. Передаваемые данные
          должны соответствовать <code>UpdateEmployeeDto</code>.
        </p>
        <p><strong>Пример запроса (JSON):</strong></p>
        <pre>
{
  "employee_salary": 125000,
  "employee_age": 36
}</pre
        >
        <p>
          <strong>Пример ответа:</strong> <em>Данные сотрудника обновлены</em>
        </p>
      </div>
    </section>

    <section>
      <h2>Структура данных (DTO)</h2>
      <h3>CreateEmployeeDto</h3>
      <p>Используется для создания нового сотрудника.</p>
      <ul>
        <li>
          <code>employee_name</code> (string, обязательное): Имя сотрудника.
        </li>
        <li>
          <code>employee_salary</code> (number, обязательное): Зарплата
          сотрудника.
        </li>
        <li>
          <code>employee_age</code> (number, обязательное): Возраст сотрудника.
        </li>
        <li>
          <code>id</code> (number, опционально): Идентификатор сотрудника. Может
          передаваться, но обычно генерируется автоматически.
        </li>
        <li>
          <code>profile_image</code> (string, опционально): URL изображения
          профиля сотрудника.
        </li>
      </ul>

      <h3>UpdateEmployeeDto</h3>
      <p>
        Используется для обновления данных сотрудника. Наследуется от
        <code>CreateEmployeeDto</code>, при этом все поля являются
        опциональными.
      </p>
    </section>

    <section>
      <h2>Обработка ошибок</h2>
      <p>
        Если сотрудник с указанным <code>id</code> не найден, API возвращает
        ошибку с кодом <code>404 Not Found</code> и сообщением вида:
      </p>
      <pre>
{
  "statusCode": 404,
  "message": "Сотрудник с id: [id] не найден"
}</pre
      >
    </section>

    <footer
      style="
        text-align: center;
        margin-top: 30px;
        font-size: 0.9em;
        color: #777;
      "
    >
      <p>&copy; 2025 API Базы Сотрудников</p>
    </footer>
  </body>
</html>

		`;
  }
}
