# import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LinearRegression
# import joblib

# # Example data
# X = np.array([[1], [2], [3], [4], [5]])
# y = np.array([2, 4, 6, 8, 10])

# # Split the data
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# # Train the model
# model = LinearRegression()
# model.fit(X_train, y_train)

# # Save the model
# joblib.dump(model, 'model.pkl')