# # from flask import Flask, request, jsonify

# # app = Flask(__name__)

# # # Dummy user data (you might want to use a database in a real scenario)
# # users = {
# #     "user1": {"password": "pass123"},
# #     "user2": {"password": "pass456"}
# # }

# # @app.route('/login', methods=['POST'])
# # def login():
# #     data = request.get_json()
# #     username_u = data.get('Username')
# #     password_p = data.get('Password')
# #     print(username_u,"----")
# #     print(password_p,"----")
# #     if not username_u or not password_p:
# #         return jsonify({'message': 'Please provide both username and password'}), 400

# #     if username_u not in users or users[username_u]['password'] != password_p:
# #         return jsonify({'message': 'Invalid credentials'}), 401

# #     return jsonify({'message': 'Login successful'}), 200

# # if __name__ == '__main__':
# #     app.run(debug=True)




# from flask import Flask, request, jsonify

# app = Flask(__name__)

# # Dummy user data (you might want to use a database in a real scenario)
# users = {
#     "user1": {"password": "pass123"},
#     "user2": {"password": "pass456"}
# }

# @app.route('/login', methods=['POST'])
# def login():
#     # return users    # data = request.get_json()
#     username = request.form['Username']
#     password = request.form['Password']

#     if not username or not password:
#         return jsonify({'message': 'Please provide both username and password'}), 400

#     if username not in users or users[username]['password'] != password:
#         return jsonify({'message': 'Invalid credentials'}), 401

#     return jsonify({'message': 'Login successful'}), 200

# if __name__ == '__main__':
#     app.run(debug=True)
